import React from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./components/Pages/DashboardPage";
import Router from "next/router";

const Dashboard = (props) => {
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
            <Navbar />
            <DashboardPage userID={props.userID} />
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
