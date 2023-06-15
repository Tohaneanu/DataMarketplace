import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./DataDetailsImg.module.css";
import images from "../../img";

const DataDetailsImg = ({ Data }) => {
  // const [description, setDescription] = useState(true);
  // const [details, setDetails] = useState(true);

  // const openDescription = () => {
  //   if (!description) {
  //     setDescription(true);
  //   } else {
  //     setDescription(false);
  //   }
  // };

  // const openDetails = () => {
  //   if (!details) {
  //     setDetails(true);
  //   } else {
  //     setDetails(false);
  //   }
  // };
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={Style.DataDetailsImg}>
      <div className={Style.DataDetailsImg_box}>
        <div className={Style.DataDetailsImg_box_Data}>
          <div className={Style.DataDetailsImg_box_Data_img}>
            {Data.dataType == "Image" ? (
              <Image
                src={Data.image}
                className={Style.DataDetailsImg_box_Data_img_img}
                alt="Data image"
                width={700}
                height={700}
                objectFit="cover"
              />
            ) :  Data.dataType === "Video" ? (
              <Video autoPlay={false} loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
            <source src={Data.image} type="video/mp4" />
        </Video>
            ) : (
              <div>
                <Image
                  src={images.musiceWave2}
                  className={Style.DataDetailsImg_box_Data_img_img}
                  alt="Data image"
                  width={800}
                  height={500}
                  objectFit="cover"
                />
                <AudioPlayer autoPlay={false} loop muted
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  playing={isPlaying}
                  src={Data.image}
                // other props here
                />
              </div>
            )
            }

          </div>
        </div>

        {/* <div
          className={Style.DataDetailsImg_box_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {description && (
          <div className={Style.DataDetailsImg_box_description_box}>
            <p>{Data.description}</p>
          </div>
        )}

        <div
          className={Style.DataDetailsImg_box_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>

        {details && (
          <div className={Style.DataDetailsImg_box_details_box}>
            <p>
              <small>Contract Address</small>
              <br></br>
              {Data.seller}
            </p>
            <p>
              <small>Token ID</small>
              &nbsp; &nbsp; {Data.tokenId}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DataDetailsImg;
