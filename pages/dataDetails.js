import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import DataDetailsPage from "../utils/dataDetailsPage/DataDetailsPage";

const dataDetails = () => {

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

export default dataDetails;
