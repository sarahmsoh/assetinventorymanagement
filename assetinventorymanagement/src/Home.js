import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import Home Page CSS
import { useState } from "react";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Asset Management System</h1>
        <p>Effortlessly manage requests, repairs, and allocated assets.</p>

        <div className="home-buttons">
          <Link to="/signup">
            <button className="home-btn signup-btn">Get Started</button>
          </Link>
          <Link to="/login">
            <button className="home-btn login-btn">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
