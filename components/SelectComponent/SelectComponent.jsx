import React, { useState } from "react";
import {
  FaMusic,
  FaVideo,
  FaImages
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./SelectComponent.module.css";

const SelectComponent = (selectedType) => {
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(false);
  const [audio, setAudio] = useState(false);

  //FUNCTION SECTION
  const selectImage = () => {
    if (!image) {
      setImage(true);
      selectedType.onTypeChange("Image");
    }
    setVideo(false);
    setAudio(false);
  };

  const selectVideo = () => {
    if (!video) {
      setVideo(true);
      selectedType.onTypeChange("Video");
    }
    setImage(false);
    setAudio(false);
  };

  const selectAudio = () => {
    if (!audio) {
      setAudio(true);
      selectedType.onTypeChange("Audio");
    }
    setImage(false);
    setVideo(false);
  };


  return (
    <div className={Style.select}>
      <div className={Style.select_box_items}>
        <div className={Style.select_box_items_box}>
          <div
            className={Style.select_box_items_box_item_trans}
            onClick={() => selectImage()}
          >
            <FaImages /> <small>Image</small>
            {image ? <TiTick /> : <AiFillCloseCircle />}
          </div>
        </div>

        <div className={Style.select_box_items_box}>
          <div
            className={Style.select_box_items_box_item_trans}
            onClick={() => selectVideo()}
          >
            <FaVideo /> <small>Video</small>
            {video ? <TiTick /> : <AiFillCloseCircle />}
          </div>
        </div>

        <div className={Style.select_box_items_box}>
          <div
            className={Style.select_box_items_box_item_trans}
            onClick={() => selectAudio()}
          >
            <FaMusic /> <small>Audio</small>
            {audio ? <TiTick /> : <AiFillCloseCircle />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
