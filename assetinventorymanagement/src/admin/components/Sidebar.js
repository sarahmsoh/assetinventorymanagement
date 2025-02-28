import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaCube, 
  FaEnvelope, 
  FaClipboardList, 
  FaCogs, 
  FaChartBar 
} from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="sidebar d-flex flex-column vh-100 border-end bg-light position-fixed">
      <div className="p-3 sidebar-header">
        <h4>Admin Panel</h4>
      </div>
      <ul className="nav nav-pills flex-column mb-auto p-3">
        <li className="nav-item mb-2">
          <Link to="/admin/dashboard" className="nav-link">
            <FaTachometerAlt className="me-2" />
            <span className="link-text">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/users" className="nav-link">
            <FaUsers className="me-2" />
            <span className="link-text">Manage Users</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/assets" className="nav-link">
            <FaCube className="me-2" />
            <span className="link-text">Manage Assets</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/requests" className="nav-link">
            <FaEnvelope className="me-2" />
            <span className="link-text">Requests</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/audit-logs" className="nav-link">
            <FaClipboardList className="me-2" />
            <span className="link-text">Audit Logs</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/system-config" className="nav-link">
            <FaCogs className="me-2" />
            <span className="link-text">System Config</span>
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/reports" className="nav-link">
            <FaChartBar className="me-2" />
            <span className="link-text">Reports</span>
          </Link>
        </li>
      </ul>
      {/*
      <div className="p-3 mt-auto">
        <button onClick={() => {
          dispatch(logout());
          navigate('/login');
        }} className="btn btn-danger w-100">
          Logout
        </button>
      </div>
      */}
    </div>
  );
};

export default Sidebar;