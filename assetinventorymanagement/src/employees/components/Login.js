import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login({ setLoggedIn }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password || !role) {
      alert('Please enter your username, password, and select a role');
      return;
    }

    axios
      .post('/api/login', { name, password, role }) // Adjust API endpoint as needed
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('isLoggedIn', 'true'); // Save login status

        // Redirect user based on role
        if (role === '1') {
          navigate('/admin-dashboard');
        } else if (role === '2') {
          navigate('/manager-dashboard');
        } else if (role === '3') {
          navigate('/employee-dashboard');
        } else {
          navigate('/home'); // Default fallback
        }
      })
      .catch((error) => {
        console.error(error.response?.data);
        alert(error.response?.data?.message || 'Login failed!');
      });
  };

  return (
    <div className="login">
      <p>Hello User <br />Please log in first to gain access.</p>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="formGroup">
          <label htmlFor="username" className="label">Name:</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={handleUsernameChange}
            className="loginInput"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password" className="label">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="loginInput"
            required
          />
        </div>

        {/* Role Selection */}
        <div className="formGroup">
          <label htmlFor="role" className="label">Select Role:</label>
          <select
            className="form-select"
            id="role"
            value={role}
            onChange={handleRoleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="1">Admin</option>
            <option value="2">Manager</option>
            <option value="3">Employee</option>
          </select>
        </div>

        <button type="submit" className="loginButton" onClick={() => setLoggedIn(true)}>Login</button>
      </form>
    </div>
  );
}

export default Login;
