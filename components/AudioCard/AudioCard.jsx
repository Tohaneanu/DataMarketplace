import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./AudioCard.module.css";
import images from "../../img";

const AudioCard = ({ Data }) => {
  const [DataState, setDataState] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const newDataState = Data.map((el) => {
      const audio = new Audio(el.image);
      audio.addEventListener("ended", () => {
        setDataState((prevState) => {
          const DataIndex = prevState.findIndex((Data) => Data.tokenId === el.tokenId);
          const Data = prevState[DataIndex];
          Data.play = false;
          const newState = [...prevState];
          newState[DataIndex] = Data;
          return newState;
        });
      });
      return {
        ...el,
        audio,
        play: false
      };
    });
    setDataState(newDataState);
  }, [Data]);

  const togglePlay = (tokenId) => {
    const DataIndex = DataState.findIndex((el) => el.tokenId === tokenId);
    if (DataIndex >= 0) {
      const Data = DataState[DataIndex];
      if (!Data.play) {
        Data.audio.play();
      } else {
        Data.audio.pause();
      }
      setDataState((prevState) => {
        const newState = [...prevState];
        newState[DataIndex] = {
          ...prevState[DataIndex],
          play: !prevState[DataIndex].play
        };
        return newState;
      });
    }
    // Pause all other audios except the clicked one
    DataState.forEach((Data, index) => {
      if (Data.tokenId !== tokenId && Data.play) {
        Data.audio.pause();
        setDataState((prevState) => {
          const newState = [...prevState];
          newState[index] = {
            ...prevState[index],
            play: false
          };
          return newState;
        });
      }
    });
  };

  useEffect(() => {
    const handleRouteChange = () => {
      DataState.forEach((Data) => {
        if (Data.play) {
          Data.audio.pause();
          setDataState((prevState) => {
            const newState = [...prevState];
            newState[DataState.indexOf(Data)] = {
              ...Data,
              play: false
            };
            return newState;
          });
        }
      });
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router, DataState]);

  return (
    <div className={Style.DataCardTwo}>
      {DataState.map((el, i) => (
        <Link href={{ pathname: "/Data-details", query: el }} key={i + 1}>
          <div className={Style.DataCardTwo_box}>
            <div className={Style.audioCard_box_player}>
              <Image src={images.musiceWave2} alt="musice" width={150} height={150} />
              <div
                className={Style.audioCard_box_musicPlayer}
                onClick={(event) => {
                  event.preventDefault();
                  togglePlay(el.tokenId);
                }}
              >
                {el.play ? (
                  <div className={Style.audioCard_box_musicPlayer_icon}>
                    <TbPlayerPause />
                  </div>
                ) : (
                  <div className={Style.audioCard_box_musicPlayer_icon}>
                    <TbPlayerPlay />
                  </div>
                )}
                {/* <div className={Style.audioCard_box_musicPlayer_volume}>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={el.volume}
                    onChange={(event) => {
                      event.preventDefault();
                      changeVolume(el.tokenId, event.target.value);
                    }}
                  />
                </div> */}
              </div>
            </div>
            <div className={Style.DataCardTwo_box_info}>
              <div className={Style.DataCardTwo_box_info_left}>
                <p>{el.name}</p>
              </div>
            </div>

            <div className={Style.DataCardTwo_box_price}>
              <div className={Style.DataCardTwo_box_price_box}>
                <small>Price</small>
                <p>{el.price || i + 4} ETH</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <audio id="audio" />
    </div>
  );

}

export default AudioCard;
