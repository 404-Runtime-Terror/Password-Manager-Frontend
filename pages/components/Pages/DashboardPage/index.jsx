import React from "react";
import Accounts_list from "./AccountsList";
import Account from "./AccountsList/Account";

// import style module
import styles from "./style.module.css";

const DashboardPage = (props) => {
  return (
    <>
      <div className={styles.Dashboard}>{props.userID}</div>
      <Accounts_list/>
      <Account/>
      
    </>
  );
};

export default DashboardPage;
