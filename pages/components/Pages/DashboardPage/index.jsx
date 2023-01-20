import React from "react";
import AccountsList from "./AccountsList";

// import style module
import styles from "./style.module.css";

const DashboardPage = (props) => {
  return (
    <>
      <div className={styles.Dashboard}>{props.userID}</div>
      <AccountsList/>
      
    </>
  );
};

export default DashboardPage;
