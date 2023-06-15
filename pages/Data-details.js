import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category } from "../components/componentsindex";
import DataDetailsPage from "../DataDetailsPage/DataDetailsPage";

//IMPORT SMART CONTRACT DATA
import { DataMarketplaceContext } from "../Context/DataMarketplaceContext";
const DataDetails = () => {
  const { currentAccount } = useContext(DataMarketplaceContext);

  const [Data, setData] = useState({
    image: "",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: "",
  });

  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setData(router.query);
  }, [router.isReady]);

  return (
    <div>
      <DataDetailsPage Data={Data} />
    </div>
  );
};

export default DataDetails;
