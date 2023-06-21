import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorDataCardBox.module.css";
import { DataCard } from "../../collectionPage/collectionIndex";

const AuthorDataCardBox = ({
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

export default AuthorDataCardBox;
