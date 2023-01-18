import React from "react";
import Navbar from "./components/Navbar";
import DashboardPage from "./components/Pages/DashboardPage";

const Dashboard = () => {
  return (
    <>
      {/* // this is for temporay */}
      <div className="dashboard">
        <Navbar />
        <DashboardPage />
      </div>
    </>
  );
};

export default Dashboard;
