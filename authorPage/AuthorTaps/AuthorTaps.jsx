import React, { useState } from "react";

//INTERNAL IMPORT
import Style from "./AuthorTaps.module.css";

const AuthorTaps = ({
  setCollectiables,
  setCreated,
}) => {
  const [activeBtn, setActiveBtn] = useState(1);

  const openTab = (e) => {
    const btnText = e.target.innerText;
    console.log(btnText);
    if (btnText == "Listed Datas") {
      setCollectiables(true);
      setCreated(false);
      setActiveBtn(1);
    } else if (btnText == "Own Data") {
      setCollectiables(false);
      setCreated(true);
      setActiveBtn(2);
    } 
  };

  return (
    <div className={Style.AuthorTaps}>
      <div className={Style.AuthorTaps_box}>
        <div className={Style.AuthorTaps_box_left}>
          <div className={Style.AuthorTaps_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Listed Datas
            </button>
            <button
              className={`${activeBtn == 2 ? Style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Own Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
