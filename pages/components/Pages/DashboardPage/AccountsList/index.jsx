import React from "react";
import style from "./style.module.css";
import Link from "next/link";
// import icons
import { BsStarFill } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import react from "react";


const Accounts_list = (props) => {
  const { website } = props;
  return (
    <>
      <div className={style.app_list}>
        {website.map((e, key) => (
          // <Link href='/page/components/Pages/DashboardPage/AccountsList/Account' as={`/page/components/Pages/DashboardPage/AccountsList/Account/${key}`} key={key}>
            <div className={style.Accounts}
            onClick = {()=>{console.log(key)
            props.setindex(key)}}
                        >
              {/* {props.setindex(key)} */}
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
          // </Link>
        ))}
      </div>
    </>
  );
};

export default Accounts_list;

  

