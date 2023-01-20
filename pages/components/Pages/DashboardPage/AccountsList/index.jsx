import React from "react";
import style from "./style.module.css";
// import icons
import { BsStarFill } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

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
                {e}
                <div className={style.arrow}>
                  <FaArrowCircleRight />
                </div>
              </div>
            </>
          );
        })}
        {/* <a href="#Facebook">Facebook</a> */}
        {/* <a href="#Twitter">Twitter</a> */}
        {/* <a href="#Instagram">Instagram</a> */}
      </div>
    </>
  );
};

export default Accounts_list;
