import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaSearch, FaChevronDown, FaChevronUp, FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDashboard, setShowDashboard] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Ideally, fetch the user's name from Redux or context; using localStorage as a placeholder
  const userName = localStorage.getItem('userName') || "John Doe";

  return (
    <header className="header bg-primary text-white">
      <div className="container-fluid">
        <div className="header-top d-flex align-items-center justify-content-between py-3">
          <h1 className="header-brand h4 mb-0" style={{ fontWeight: 'bold' }}>
            shulee
          </h1>
          <div className="position-relative flex-grow-1 mx-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '2.5rem', borderRadius: '50px' }}
            />
            <FaSearch
              style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#999'
              }}
            />
          </div>
          <div className="d-flex align-items-center">
            <FaUserCircle size={40} className="me-2" />
            <span className="me-3">{userName}</span>
            <button onClick={handleLogout} className="btn btn-danger">
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
