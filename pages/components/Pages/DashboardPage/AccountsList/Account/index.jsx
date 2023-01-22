import React, { useEffect } from "react";
import style from "./style.module.css";
import { CiSaveDown2 } from "react-icons/ci";

function Account(props) {
  const { accounts } = props;

  return (
    <>
      {accounts === undefined ? (
        <div>loading</div>
      ) : (
        <>
          <div className={style.Account}>
                <div className={style.logo}>
                  <CiSaveDown2 size={"6rem"}/>
                </div>
          {console.log(accounts)}
          {accounts.map((e,index) => {
            return (
              <>
                <div className={style.box}>
                  <label>username</label>
                  <input type="username" name={accounts[index].username} placeholder={accounts[index].username} />
                </div>
                <div className={style.box}>
                  <label>
                  password
                  </label>
                  <input type="password" name={accounts[index].password} placeholder={accounts[index].password} />
                </div>
              </>
            );
          })}
          </div>
        </>
      )}
    </>
  );
}

export default Account;