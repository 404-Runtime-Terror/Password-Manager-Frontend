import React from "react";
import style from "./style.module.css";
// import icons
import { BsStarFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

const Element = ["Twitter", "Facebook", "Instagram", "Netflix", "Prime"];
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
                <span className={style.AccountItem}>{e}</span>
                <div className={style.arrow}>
                  <MdArrowForwardIos />
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
