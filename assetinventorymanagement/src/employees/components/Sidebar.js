import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  // Ensure the necessary CSS for styling is imported

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Employee Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        {/* Links to the pages */}
        <li>
          <Link to="/requestform" className="sidebar-link">Request Asset</Link>
        </li>
        <li>
          <Link to="/RepairForm" className="sidebar-link">Request Repair</Link>
        </li>
        <li>
          <Link to="/requests" className="sidebar-link">Requests</Link>
        </li>
        <li>
          <Link to="/repairs" className="sidebar-link">Repairs</Link>
        </li>
        <li>
          <Link to="/assets" className="sidebar-link">Assets</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
