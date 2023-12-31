import React, { useState } from "react";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

//INTERNAL IMPORT
import Style from "./Upload.module.css";
import formStyle from "../contactUs/Form.module.css";
import { Button, SelectComponent } from "../../components/componentsindex.js";
import { DropZone } from "./uploadDataIndex.js";

const UploadData = ({ uploadToIPFS, createData }) => {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [selectedType, setSelectedType] = useState("Image");

  const router = useRouter();

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className={Style.upload}>
      <SelectComponent onTypeChange={handleTypeChange} />
      {selectedType === "Image" && (
        <DropZone
          title="JPG, PNG, WEBM , MAX 100MB"
          heading="Drag & drop file"
          subHeading="or Browse media on your device"
          name={name}
          description={description}
          setImage={setImage}
          uploadToIPFS={uploadToIPFS}
          type={selectedType}
        />
      )}
      {selectedType === "Video" && (
        <DropZone
          title="MP4, test, test , MAX 100MB"
          heading="Drag & drop file"
          subHeading="or Browse media on your device"
          name={name}
          description={description}
          setImage={setImage}
          setThumbnail={setThumbnail}
          uploadToIPFS={uploadToIPFS}
          type={selectedType}
        />
      )}
      {selectedType === "Audio" && (
        <DropZone
          title="MP3, aaa, bbb , MAX 100MB"
          heading="Drag & drop file"
          subHeading="or Browse media on your device"
          name={name}
          description={description}
          setImage={setImage}
          uploadToIPFS={uploadToIPFS}
          type={selectedType}
        />
      )}
      <div className={Style.upload_box}>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="Data">Item Name</label>
          <input
            type="text"
            placeholder="suggestive name"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="something about yourself in few words"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Price">Price</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input
                type="text"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={Style.upload_box_btn}>
          <Button
            btnName="Upload"
            handleClick={async () =>
              toast.promise(
                createData(
                  name,
                  price,
                  image,
                  thumbnail,
                  description,
                  selectedType,
                  router
                ),
                {
                  pending: "Creating data...",
                  autoClose: "1000",
                  closeOnClick: true,
                }
              )
            }
            classStyle={Style.upload_box_btn_style}
          />
          <Button
            btnName="Preview"
            handleClick={() => { }}
            classStyle={Style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadData;
