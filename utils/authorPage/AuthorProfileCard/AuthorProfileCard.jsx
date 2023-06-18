import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MdVerified
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import Popup from 'reactjs-popup';
import { toast } from "react-toastify";
// import 'reactjs-popup/dist/index.css';
//INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css";
import images from "../../../img";
import { Button } from "../../../components/componentsindex";

const AuthorProfileCard = ({ currentAccount, isOwner, listingPrice, updateListingPrice, marketBalance, withdraw }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(listingPrice);
  const [listingPriceState, setListingPriceState] = useState(listingPrice);
  const [marketBalanceState, setMarketBalanceState] = useState(0);

  useEffect(() => {
    setInputValue(listingPrice);
  }, [listingPrice]);

  useEffect(() => {
    setMarketBalanceState(Number(marketBalance));
  }, [marketBalance]);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const handleSave = async () => {
    setIsOpen(false);
    setListingPriceState("...");
    const id = toast.loading("Updating in progress...");
    try {
      const result = await updateListingPrice(inputValue);
      if (result) {
        setListingPriceState(inputValue.toString());
        toast.update(id, { render: "Successful update! 👍", type: "success", isLoading: false, autoClose: 2000 });
      } else {
        toast.update(id, { render: "Error while updating!", type: "error", isLoading: false, autoClose: 2000 });
        setListingPriceState(listingPrice.toString());
        setInputValue(listingPrice.toString());
      }
    } catch (error) {
      console.log("Error while updating", error);
    }
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.user1}
            className={Style.AuthorProfileCard_box_img_img}
            alt="Data IMAGES"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          {isOwner ? (
            <h2>
              Market Owner
              <span>
                <MdVerified />
              </span>{" "}
            </h2>
          ) : (
            <h2>
              Author{" "}
              <span>
                <MdVerified />
              </span>{" "}
            </h2>
          )}

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input type="text" value={currentAccount} id="myInput" readOnly />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>

          {isOwner && (
            <div className={Style.AuthorProfileCard_box_info_owner}>
              <div className={Style.AuthorProfileCard_box_info_owner_first}>
                <div className={Style.AuthorProfileCard_box_info_listing}>
                  <span>Listing Price: {listingPriceState == 0 ? listingPrice : listingPriceState} ETH</span>
                </div>
                <div className={Style.AuthorProfileCard_box_info_owner_button}>
                  <Button
                    btnName="Update listing price"
                    handleClick={() => {
                      setIsOpen(true);
                    }}
                    style={{ padding: "0.3rem 0.7rem" }}
                  />
                  <Popup
                    open={isOpen}
                    // closeOnDocumentClick={false}
                    onClose={() => setIsOpen(false)}
                    position="right center"
                  >
                    <div className={Style.AuthorProfileCard_box_popup}>
                      <div className={Style.Form_box_input_box}>
                        <input
                          type="number"
                          value={inputValue}
                          onChange={(e) =>
                            setInputValue(parseFloat(e.target.value))
                          }
                          step="0.001"
                          min="0"
                          max="10"
                        />
                      </div>
                      <Button btnName="Save" handleClick={handleSave} />
                    </div>
                  </Popup>
                </div>
              </div>
              <div className={Style.AuthorProfileCard_box_info_owner_second}>
                <div className={Style.AuthorProfileCard_box_info_listing}>
                  <span>Market balance: {marketBalanceState === 0 ? marketBalance : (marketBalanceState === -1 ? 0.0 : marketBalanceState)} ETH</span>
                </div>
                <div className={Style.AuthorProfileCard_box_info_owner_button}>
                  <Button
                    btnName="Withdraw funds"
                    handleClick={async () => {
                      if (marketBalanceState > 0 || (marketBalance > 0 && marketBalanceState != -1)) {
                        const id = toast.loading("Withdrawal in progress...");
                        const check = await withdraw();
                        if (check) {
                          toast.update(id, { render: "Successful withdrawal! 👍", type: "success", isLoading: false, autoClose: 2000 });
                          setMarketBalanceState(-1);
                        } else {
                          toast.update(id, { render: "Error while withdrawing", type: "error", isLoading: false, autoClose: 2000 });
                        }
                      } else {
                        toast.error("Insufficient funds!", { closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, });
                      }
                    }}
                    style={{ padding: "0.3rem 0.7rem" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={Style.AuthorProfileCard_box_share}></div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
