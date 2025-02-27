import React from 'react';
import Sidebar from './Sidebar';
import './Dash.css'; 

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <div className="content-card">
        <h2>Welcome to the Dashboard</h2>
        <p>Here you can manage all your assets and requests.</p>
      </div>
      <Sidebar />
     
    </div>
  );
};

export default DashboardLayout;
