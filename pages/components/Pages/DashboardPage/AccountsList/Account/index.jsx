import React from "react";
import style from "./style.module.css";
import {CiSaveDown2} from "react-icons/ci"
// import style from "../../../DashboardPage/AccountsList/Account/style.module.css"
// import "./style.module.css";

function Account() {
  return (
    <>
    <div className={style.Account}>
    {/* <div className="Account"> */}

    {/* //UserName */}
      <div className={style.field}>
        <label>UserName</label>
        <input type="text" name="username" placeholder='Username'/>
      </div>

      {/* //Email */}
      <div className={style.field}>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email"/>
      </div>

      {/* //Password */}
      <div className={style.field}>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password"/>
      </div>
      
      {/* //Save */}
      <button className={style.fielduibutton}>
        <CiSaveDown2/>
        Save</button>
      </div>

    </>
    )
}

export default Account;
