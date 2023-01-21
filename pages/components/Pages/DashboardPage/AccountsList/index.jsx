import React from "react";
import style from "./style.module.css";
// import icons
import { BsStarFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";

// Account list array
const Element = ["Twitter", "Facebook", "Instagram", "Netflix", "Prime"];
const Accounts_list = () => {
  return (
    <>
      {/* App list container */}
      <div className={style.app_list}>
        {/* Map Function to create accounts */}
        {Element.map((e, key) => {
          return (
            <>
              {/* AccountsList container */}
              <div key={key} className={style.Accounts}>
                {/* Accounts Logo container */}
                <div className={style.favLogo}>
                  <BsStarFill />
                </div>

                {/* Account Name */}
                <span className={style.AccountItem}>{e}</span>

                {/* container to show MoreInfo & Arrow */}
                <div className={style.arrowInfo}>
                  {/* Display Number of users */}
                  <span className={style.noofItem}>{key}</span>

                  {/* Arrow icon */}
                  <MdArrowForwardIos size={"1.3rem"} />
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
