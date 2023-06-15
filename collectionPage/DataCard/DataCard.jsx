import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./DataCard.module.css";

const DataCard = ({ Data }) => {
  return (
    <div className={Style.DataCardTwo}>
      {Data?.map((el, i) => (
        <Link href={{ pathname: "/Data-details", query: el }} key={i + 1}>
          <div className={Style.DataCardTwo_box}>
            <div className={Style.DataCardTwo_box_img}>
              <Image
                src={el.dataType == "Image" ? el.image : el.thumbnail}
                alt="Data"
                width={500}
                height={500}
                objectFit="cover"
                className={Style.DataCardTwo_box_img_img}
              />
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
    </div>
  );
};

export default DataCard;
