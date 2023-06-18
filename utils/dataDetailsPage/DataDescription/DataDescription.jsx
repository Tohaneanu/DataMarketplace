import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { MdVerified } from "react-icons/md";
import { FaWallet, FaCloudUploadAlt } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DataDescription.module.css";
import images from "../../../img";
import { Button } from "../../../components/componentsindex.js";

//IMPORT SMART CONTRACT
import { DataMarketplaceContext } from "../../../Context/DataMarketplaceContext";

const DataDescription = ({ Data }) => {
  const [DataMenu, setDataMenu] = useState(false);
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [hasPermission, setPermission] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkPermission = async () => {
      const value = await hasTokenFromOwner();
      setPermission(value);
    };
    checkPermission();
  }, []);


  const openDescription = () => {
    if (!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const openDetails = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };
  const openDataMenu = () => {
    if (!DataMenu) {
      setDataMenu(true);
    } else {
      setDataMenu(false);
    }
  };

  //SMART CONTRACT DATA
  const { buyData, buyBack, currentAccount, hasTokenFromOwner } = useContext(DataMarketplaceContext);

  let buttonComponent;
  if (currentAccount === Data.seller.toLowerCase()) {
    buttonComponent = (
      <>
        <p>You can't buy your own Data!</p>
        <Button
          icon={<MdRemoveShoppingCart />}
          btnName="Remove from Marketplace"
          handleClick={() => buyBack(Data.tokenId)}
          classStyle={Style.button}
        />
      </>
    );
  } else if (currentAccount === Data.owner.toLowerCase()) {
    if (hasPermission) {
      buttonComponent = (
        <>

          <Button
            icon={<FaWallet />}
            btnName="List on Marketplace"
            handleClick={() =>
              router.push(
                `/reSellToken?id=${Data.tokenId}&tokenURI=${Data.tokenURI}&price=${Data.price}`
              )
            }
            classStyle={Style.button}
          />

          <Button
            icon={<FaCloudUploadAlt />}
            btnName="Use Token"
            handleClick={() =>
              router.push(
                `/useTokenDiabetesPredict`
              )
            }
            classStyle={Style.button2}
          />
        </>

      );
    } else {
      buttonComponent = (
        <>
          <p>You can't buy your own Data!</p>
          <Button
            icon={<MdRemoveShoppingCart />}
            btnName="Remove from Marketplace"
            handleClick={() => buyBack(Data.tokenId)}
            classStyle={Style.button}
          />
        </>
      );
    }

  } else {
    buttonComponent = (
      <Button
        icon={<FaWallet />}
        btnName="Buy Data"
        handleClick={() => buyData(Data)}
        classStyle={Style.button}
      />
    );
  }


  return (
    <div className={Style.DataDescription}>
      <div className={Style.DataDescription_box}>
        {/* //Part ONE */}
        <div className={Style.DataDescription_box_share}>
        </div>
        {/* //Part TWO */}
        <div className={Style.DataDescription_box_profile}>
          <h1>
            {Data.name} #{Data.tokenId}
          </h1>
          <div className={Style.DataDescription_box_profile_box}>

            <Image
              src={images.provider1}
              alt="profile"
              width={40}
              height={40}
              className={Style.DataDescription_box_profile_box_left_img}
            />

            <div className={Style.DataDescription_box_profile_box_right_info}>
              <small>Collection</small> <br />
              <span>
                Mokeny app <MdVerified />
              </span>
            </div>
          </div>

          <div className={Style.DataDescription_box_profile_biding}>
            <div className={Style.DataDescription_box_profile_biding_box_price}>
              <div
                className={
                  Style.DataDescription_box_profile_biding_box_price_bid
                }
              >
                <small>Price</small>
                <p>
                  {Data.price} ETH
                  {/* {Data.price} ETH <span>( ≈ $3,221.22)</span> */}
                </p>
              </div>
            </div>

            <div className={Style.DataDescription_box_profile_biding_box_button}>
              {buttonComponent}
            </div>
            <div
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDescription;
