import React from "react";
import style from "./styles.module.css";
// import style from "../../../DashboardPage/AccountsList/Account/style.module.css"
// import "./style.module.css";

function Account() {
  return (
    <>
    <div className='Account'>
      <div className='field'>
        <label>UserName</label>
        <input type="text" name="username" placeholder='Username'/>
      </div>
      <div className='field'>
        <label>Email</label>
        <input type="email" name="email" placeholder="Email"/>
      </div>
      <div className='field'>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password"/>
      </div>
      <button className='field ui button'>Save</button>
      </div>

    </>
    )
}

export default Account;
