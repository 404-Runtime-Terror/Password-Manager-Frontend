import React from "react";
import style from "./style.module.css";
import {GiPowerButton} from "react-icons/gi"
// import style from "../../../DashboardPage/AccountsList/Account/style.module.css"
// import "./style.module.css";

function Account() {
  return (
    <>
    <div className={style.Account}>
    {/* <div className="Account"> */}
      <div className={style.field}>
        <label>UserName</label>
        <input type="text" name="username" placeholder='Username'/>
      </div>
      <div className={style.field}>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email"/>
      </div>
      <div className={style.field}>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password"/>
      </div>
      <button className={style.fielduibutton}>
        <GiPowerButton/>
        Save</button>
      </div>

    </>
    )
}

export default Account;
