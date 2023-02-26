import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/Sidebar/SideBar";

const Dashboard = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div>
          <div className="title"> Dashboard </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
