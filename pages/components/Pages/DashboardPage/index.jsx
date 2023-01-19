import React from "react";
import Accounts_list from "./AccountsList";

// import style module
import styles from "./style.module.css";

const Dashboard = () => {
  return (
    <>
      <div className={styles.Dashboard}>Dashboard</div>
      <Accounts_list/>
    </>
  );
};

export default Dashboard;
