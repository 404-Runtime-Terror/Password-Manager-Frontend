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
          {console.log(accounts)}
          {accounts.map((e, index) => {
            return (
              <>
                <div className={style.logo}>
                  
                </div>
                <div className={style.box}>
                  <label>UserName/Email</label>
                  <input type="text" name="Username/Email" placeholder={e.username} />
                </div>
                <div className={style.box}>
                  <label>Password</label>
                  <input type="password" name="password" placeholder={e.password} />
                </div>
                <button className={style.save}><CiSaveDown2 />Save</button>
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