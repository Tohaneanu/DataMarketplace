import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import { DataCard } from "../../collectionPage/collectionIndex";

const AuthorNFTCardBox = ({
  collectiables,
  created,
  Datas,
  myDataS,
}) => {
  return (
    <div className={Style.AuthorDataCardBox}>
      {collectiables && <DataCard Data={Datas} />}
      {created && <DataCard Data={myDataS} />}
    </div>
  );
};

export default AuthorNFTCardBox;
