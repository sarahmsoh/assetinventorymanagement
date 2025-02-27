// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear stored token (if any)
    navigate('/'); // Redirect to homepage
  };

  return (
    <nav>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
      {/* <Link to="/employeedashboard">Dashboard</Link>
      <Link to="/requestform">Request Asset</Link>
      <Link to="/RepairForm">Request Repair</Link> */}

      {/* Logout Button */}
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </nav>
  );
};

export default Navbar;
