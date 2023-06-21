import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./DataCard.module.css";

const DataCard = ({ Data }) => {
  const [like, setLike] = useState(true);

  const likeData = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className={Style.DataCard}>
      {Data.map((el, i) => (
        <Link href={{ pathname: "/dataDetails", query: el }} key={i + 1}>
          <div className={Style.DataCard_box} key={i + 1}>
            <div className={Style.DataCard_box_img}>
              <Image
                src={el.image}
                alt="Data images"
                width={600}
                height={600}
                className={Style.DataCard_box_img_img}
              />
            </div>
            <div className={Style.DataCard_box_update_details}>
              <div className={Style.DataCard_box_update_details_price}>
                <div className={Style.DataCard_box_update_details_price_box}>
                  <h4>
                    {el.name} #{el.tokenId}
                  </h4>

                  <div className={Style.DataCard_box_update_details_price_box_box}>
                    <div className={Style.DataCard_box_update_details_price_box_bid}>
                      <small>Price</small>
                      <p>{el.price}ETH</p>
                    </div>
                    <div
                      className={
                        Style.DataCard_box_update_details_price_box_stock
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DataCard;
