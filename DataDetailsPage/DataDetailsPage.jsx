import React from "react";

//INTERNAL IMPORT
import { DataDescription, DataDetailsImg } from "./DataDetailsIndex";
import Style from "./DataDetailsPage.module.css";

const DataDetailsPage = ({ Data }) => {
  return (
    <div className={Style.DataDetailsPage}>
      <div className={Style.DataDetailsPage_box}>
        <DataDetailsImg Data={Data} />
        <DataDescription Data={Data} />
      </div>
    </div>
  );
};

export default DataDetailsPage;
