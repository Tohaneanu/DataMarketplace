import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { toast } from "react-toastify";
//INTRNAL IMPORT
import Style from "./DropZone.module.css";
import images from "../../img";

const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  description,
  category,
  uploadToIPFS,
  setImage,
  setThumbnail,
  type
}) => {
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(async (acceptedFile) => {
    if (!acceptedFile[0].type.includes(type.toLowerCase())) {
      toast.error("Check file type!", {
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.promise(
        uploadToIPFS(acceptedFile[0], type),
        {
          pending: "Uploading...",
          success: "Upload successful!",
          error: "Upload failed!",
          closeOnClick: true,
        }
      )
        .then((response) => {
          if (type == "Video") {
            setFileUrl(response.thumbnailUrl);
            setThumbnail(response.thumbnailUrl)
          } else {
            setFileUrl(response.url);
          }
          setImage(response.url);
          console.log(response.url);
          console.log("Type:" + type)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png'],
      'audio/*': ['.mp3', '.wav'],
      'video/*': ['.mp4', '.avi']
    }
  });

  return (
    <div>
      <div className={Style.DropZone}>
        <div className={Style.DropZone_box} {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={Style.DropZone_box_input}>
            <p>{title}</p>
            <div className={Style.DropZone_box_input_img}>
              <Image
                src={images.upload}
                alt="upload"
                width={100}
                height={100}
                objectFit="contain"
                className={Style.DropZone_box_input_img_img}
              />
            </div>
            <p>{heading}</p>
            <p>{subHeading}</p>
          </div>
        </div>
        {fileUrl && (
          <aside className={Style.DropZone_box_aside}>
            <div className={Style.DropZone_box_aside_box}>
              {type === "Image" && (<Image src={fileUrl} alt="data image" width={200} height={200} />)}
              {type === "Video" && (<Image src={fileUrl} alt="video image" width={200} height={200} />)}
              {type === "Audio" && (<Image src={images.audioPreview} alt="audio image" width={200} height={200} />)}
              <div className={Style.DropZone_box_aside_box_preview}>
                <div className={Style.DropZone_box_aside_box_preview_one}>
                  <p>
                    <samp>Data Name:</samp>
                    {name || ""}
                  </p>
                </div>

                <div className={Style.DropZone_box_aside_box_preview_two}>
                  <p>
                    <span>Description</span>
                    {description || ""}
                  </p>
                </div>

                <div className={Style.DropZone_box_aside_box_preview_three}>
                  <p>
                    <span>Category</span>
                    {category || ""}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
export default DropZone;
