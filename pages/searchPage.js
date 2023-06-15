import React, { useEffect, useState, useContext } from "react";
import {toast} from "react-toastify";
//INTRNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Loader, Filter, SelectComponent, AudioCard } from "../components/componentsindex";
import { SearchBar } from "../SearchPage/searchBarIndex";

import { DataCard, Banner } from "../collectionPage/collectionIndex";
import images from "../img";

//SMART CONTRACT IMPORT
import { DataMarketplaceContext } from "../Context/DataMarketplaceContext";

const searchPage = () => {
  const { fetchDatas, currentAccount } = useContext(
    DataMarketplaceContext
  );
  const [Datas, setDatas] = useState([]);
  const [DatasCopy, setDatasCopy] = useState([]);
  const [selectedType, setSelectedType] = useState("Image");

  useEffect(() => {
    try {
      // if (currentAccount) {
      fetchDatas().then((items) => {
        setDatas(items.reverse());
        setDatasCopy(items);
        console.log(Datas);
      });
      // }
    } catch (error) {
      toast.error("Please reload the browser", {closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,});
    }
  }, []);

  const onHandleSearch = (value) => {
    const filteredDataS = Datas.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredDataS.length === 0) {
      setDatas(DatasCopy);
    } else {
      setDatas(filteredDataS);
    }
  };

  const onClearSearch = () => {
    if (Datas.length && DatasCopy.length) {
      setDatas(DatasCopy);
    }
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  let componentToRender;

  if (selectedType === "Image") {
    componentToRender = <DataCard Data={Datas.filter((Data) => Data.dataType === "Image")} />;
  } else if (selectedType === "Video") {
    componentToRender = <DataCard Data={Datas.filter((Data) => Data.dataType === "Video")} />;
  } else {
    componentToRender = <AudioCard Data={Datas.filter((Data) => Data.dataType === "Audio")} />;
  }

  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch} />
      <SelectComponent onTypeChange={handleTypeChange} />
      {Datas.length === 0 ? <Loader /> : componentToRender}
    </div>
  );
};

export default searchPage;
