import React from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./components/Pages/DashboardPage";
import Router from "next/router";
import axios from "axios";
import Loader from "./components/Loader";

const Dashboard = (props) => {
  React.useEffect(() => {
    if (props.userID !== null) {
      axios
        .get(
          "https://password-manager-backend.up.railway.app/user/dashboard/completeData?userID=" +
            props.userID
        )
        .then((res) => {
          props.setUserData(res.data);
        });
    }
  }, []);

  return (
    <>
      <div className="dashboard">
        {/* // this is for temporay */}
        {props.userID === null ? (
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              className="btn"
              onClick={() => Router.push({ pathname: "/" })}
            >
              Plz Login
            </button>
          </div>
        ) : (
          <>
            {props.userData !== null ? (
              <>
                {/* {console.log(props.userData)} */}
                <Navbar
                  userID={props.userID}
                  setUserID={props.setUserID}
                  userData={props.userData}
                  setUserData={props.setUserData}
                />
                <DashboardPage userID={props.userID} 
                userData = {props.userData}/>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Loader isOn={true} width={"100px"} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
