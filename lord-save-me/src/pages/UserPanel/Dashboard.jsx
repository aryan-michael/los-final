import React from 'react';
import { Form, Row, InputGroup } from 'react-bootstrap';
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
