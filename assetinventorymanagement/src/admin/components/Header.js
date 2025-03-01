import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDashboard, setShowDashboard] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  // eslint-disable-next-line no-unused-vars
  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <header className="header bg-primary text-white">
      <div className="container-fluid">
        <div className="header-top d-flex align-items-center justify-content-between py-2">
          <h1 className="header-brand h3 mb-0">shulee</h1>
          <div className="header-search flex-grow-1 mx-3 position-relative">
            <input type="text" className="form-control" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <div className="d-flex align-items-center">
            <button onClick={handleLogout} className="btn btn-danger logout-btn">
              Logout
            </button>

          </div>
        </div>
        <Navbar />
      </div>


    </header>
  );
};

export default Header;
