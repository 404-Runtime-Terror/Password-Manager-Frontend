import React from "react";
import style from "./style.module.css";
import {CiSaveDown2} from "react-icons/ci"
// import style from "../../../DashboardPage/AccountsList/Account/style.module.css"
// import "./style.module.css";

function Account() {
  return (
    <>
    <div className={style.Account}>
      <div className={style.logo}>
        
      </div>
      <div className={style.box}>
        <label>UserName/Email</label>
        <input type="text" name="Username/Email" placeholder="Username/Email"/>
      </div>
      <div className={style.box}>
      <label>Password</label>
        <input type="password" name="password" placeholder="Password"/>
      </div>
      <button className={style.save}><CiSaveDown2/>Save</button>
    </div>
    </>
    )
}

export default Account;