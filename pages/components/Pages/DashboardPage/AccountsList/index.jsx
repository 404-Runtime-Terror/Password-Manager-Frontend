import React from "react";
import style from "./style.module.css";
// import icons
import { BsStarFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

const Element = [
  "Twitter",
  "Facebookjksdhrkjwgfjsdbfs",
  "Instagram",
  "Netflix",
  "Prime",
];
const Accounts_list = () => {
  return (
    <>
      <div className={style.app_list}>
        {Element.map((e, key) => {
          return (
            <>
              <div key={key} className={style.Accounts}>
                <div className={style.favLogo}>
                  <BsStarFill />
                </div>
                <span
                  className={style.AccountItem}
                  style={{
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    width: "50%",
                  }}
                >
                  {e}
                </span>
                <div className={style.arrow}>
                  <div className={style.moreIn}>
                    <span className={style.AccountItem}>{key}</span>

                    <MdArrowForwardIos size={"1.3rem"} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accounts_list;
