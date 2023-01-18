import React from "react";

// import style module
import styles from "./style.module.css";

const DashboardPage = (props) => {
  return (
    <>
      <div className={styles.Dashboard}>{props.userID}</div>
    </>
  );
};

export default DashboardPage;
