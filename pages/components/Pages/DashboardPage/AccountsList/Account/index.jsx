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
          {console.log(accounts)}
          <div className={style.Account}>
            {accounts.map((e, index) => {
              return (
                <>
                  <div className={style.field}>
                    <label>username</label>
                    <label>{accounts[index].username}</label>
                    <input type="text" name="username" placeholder="Username" />
                  </div>
                  //Password
                  <div className={style.field}>
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  //Save
                  <button className={style.fielduibutton}>
                    <CiSaveDown2 />
                    Save
                  </button>
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
