import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../utils/authorPage/componentIndex";

//IMPORT SMART CONTRACT DATA
import { DataMarketplaceContext } from "../Context/DataMarketplaceContext";

const author = () => {

  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);

  //IMPORT SMART CONTRACT DATA
  const { fetchMyDatasOrListedDatas, currentAccount, isOwnerOfMarket, getListingPrice, updateListingPrice, getMarketBalance, withdraw, accountBalance } = useContext(
    DataMarketplaceContext
  );

  const [Datas, setDatas] = useState([]);
  const [isOwner, setIsOwner] = useState(true);
  const [listingPrice, setListingPrice] = useState(0);
  const [marketBalance, setMarketBalance] = useState(0);
  const [myDatas, setMyDatas] = useState([]);

  useEffect(() => {
    const fetchIsOwnerOfMarket = async () => {
      const value = await isOwnerOfMarket();
      setIsOwner(value);
    };
    fetchIsOwnerOfMarket();
  }, []);

  useEffect(() => {
    const getPrice = async () => {
      const value = await getListingPrice();
      setListingPrice(value);
    };
    getPrice();
  }, []);

  useEffect(() => {
    const getBalance = async () => {
      const value = await getMarketBalance();
      setMarketBalance(value);
    };
    getBalance();
  }, []);

  useEffect(() => {
    fetchMyDatasOrListedDatas("fetchItemsListed").then((items) => {
      setDatas(items);
    });
  }, []);

  useEffect(() => {
    fetchMyDatasOrListedDatas("fetchMyDatas").then((items) => {
      setMyDatas(items);
    });
  }, []);

  return (
    <div className={Style.author}>
      <AuthorProfileCard
        currentAccount={currentAccount}
        isOwner={isOwner}
        listingPrice={listingPrice}
        updateListingPrice={updateListingPrice}
        marketBalance={marketBalance}
        withdraw={withdraw} />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        currentAccount={currentAccount}
      />

      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        Datas={Datas}
        myDataS={myDatas}
      />
    </div>
  );
};

export default author;
