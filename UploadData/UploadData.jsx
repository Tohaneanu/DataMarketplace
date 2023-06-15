import React, { useState } from "react";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

//INTERNAL IMPORT
import Style from "./Upload.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";
import { Button, SelectComponent } from "../components/componentsindex.js";
import { DropZone } from "./uploadDataIndex.js";

const UploadData = ({ uploadToIPFS, createData }) => {
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [thumbnail, setThumbnail] = useState("");
  const [selectedType, setSelectedType] = useState("Image");

  const router = useRouter();

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const categoryArry = [
    {
      image: images.Data_image_1,
      category: "Sports",
    },
    {
      image: images.Data_image_2,
      category: "Arts",
    },
    {
      image: images.Data_image_3,
      category: "Music",
    },
    {
      image: images.Data_image_1,
      category: "Digital",
    },
    {
      image: images.Data_image_2,
      category: "Time",
    },
    {
      image: images.Data_image_3,
      category: "Photography",
    },
  ];

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
          {/* <p>
            The description will
            be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </p> */}
        </div>

        {/* <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Choose collection</label>

          <div className={Style.upload_box_slider_div}>
            {categoryArry.map((el, i) => (
              <div
                className={`${Style.upload_box_slider} ${active == i + 1 ? Style.active : ""
                  }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(el.category))}
              >
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image
                      src={el.image}
                      alt="background image"
                      width={70}
                      height={70}
                      className={Style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p> {el.category} </p>
              </div>
            ))}
          </div> */}
        {/* </div> */}

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
