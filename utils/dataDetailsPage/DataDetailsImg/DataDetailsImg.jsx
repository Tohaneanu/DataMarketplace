import React, { useState } from "react";
import Image from "next/image";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

//INTERNAL IMPORT
import Style from "./DataDetailsImg.module.css";
import images from "../../../img";

const DataDetailsImg = ({ Data }) => {
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
      </div>
    </div>
  );
};

export default DataDetailsImg;
