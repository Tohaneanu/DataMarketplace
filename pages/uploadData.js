import React, { useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/uploadData.module.css";
import { UploadData } from "../utils/uploadData/uploadDataIndex";

//SMART CONTRACT IMPORT
import { DataMarketplaceContext } from "../Context/DataMarketplaceContext";

const uploadData = () => {
  const { uploadToIPFS, createData } = useContext(DataMarketplaceContext);
  return (
    <div className={Style.uploadData}>
      <div className={Style.uploadData_box}>
        <div className={Style.uploadData_box_heading}>
          <h1>Create New Data</h1>
          <p>
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
        </div>

        <div className={Style.uploadData_box_title}>
          <h2>Select Image, Video, Audio, or add Text</h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>

        <div className={Style.uploadData_box_form}>
          <UploadData uploadToIPFS={uploadToIPFS} createData={createData} />
        </div>
      </div>
    </div>
  );
};

export default uploadData;
