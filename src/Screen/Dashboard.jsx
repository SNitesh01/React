import React, { useEffect, useState } from "react";
//import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/sidebar/Sidebar";
//import Navbar from "../components/navbar/Navbar";
import { http } from "../config/axiosConfig";
//import Students from "../components/students/Students";
import "./dashboard.css";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {
    http("/dashboard").then(res => setDashboardData(res.data));
  }, []);
  console.log(dashboardData);

  return (
    <div className="m-dashboard">
      <div className="m-navbar"></div>
      <div className="m-sidebar">
        <Sidebar />
      </div>
      <div className="m-main-area">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;