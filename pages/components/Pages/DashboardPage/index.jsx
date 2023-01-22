import React, { useEffect } from "react";
import Accounts_list from "./AccountsList";
import Account from "./AccountsList/Account";

// import style module
import styles from "./style.module.css";

const DashboardPage = (props) => {
  const [passwords, setPasswords] = React.useState([]); // passwords state
  const [accounts, setAccounts] = React.useState([]);
  const [website, setWebsites] = React.useState([]);
  const [index, setindex] = React.useState(0);
  useEffect(() => {
    setPasswords(props.userData.passwordData.passwords);

    passwords.map((e, index) => {
      setAccounts((e) => [...e, passwords[index].accounts]);
      setWebsites((e) => [...e, passwords[index].websites]);
    });
  }, [props.userData]);

  return (
    <>
      {/* <div className={styles.Dashboard}>{props.userData.passwordData._id}</div> */}
      <Accounts_list
        website={website}
        setindex={setindex}
        accounts={accounts}
      />
      {/* {console.log(accounts[index])} */}
      <Account accounts={accounts[index]} />
    </>
  );
};

export default DashboardPage;
