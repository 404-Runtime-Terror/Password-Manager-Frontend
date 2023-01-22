import React, { useEffect } from "react";
import style from "./style.module.css";
import { CiSaveDown2 } from "react-icons/ci"

function Account(props) {
  const { accounts } = props;
  const [fetchaccount, setFetchaccount] = React.useState([]);
  useEffect(() => {
    if(props.index !== undefined && props.index !== null){
      setFetchaccount(accounts[props.index]);
    }
    else{
      setFetchaccount(accounts[0]);
    }
  }, [props.index]);
  return (
    <>
    {console.log(fetchaccount)}
    {fetchaccount && fetchaccount.map((e,index) => {
      return(
        <div className={style.Account}>
        <div className={style.field}>
          <label>username</label>
          <label>{fetchaccount[index].username}</label>
          <input type="text" name="username" placeholder='Username' />
        </div>

        <div className={style.field}>
          <label>{fetchaccount[index].password}</label>
          <input type="password" name="password" placeholder="Password" />
        </div>

        <button className={style.fielduibutton}>
          <CiSaveDown2 />
          Save</button>
      </div>
      )
    }
    )}

    </>
  )
}

export default Account;
