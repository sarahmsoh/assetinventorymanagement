import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';


function Login({ setLoggedIn }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !password) {
      alert('Please enter your username and password');
      return;
    }

    axios
      .post('/api/login', { name, password }) // Adjust API endpoint as needed
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('isLoggedIn', 'true'); // Save login status
        navigate('/dashboard'); // Redirect to the general dashboard
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

        <button type="submit" className="loginButton" onClick={() => setLoggedIn(true)}>Login</button>
      </form>
    </div>
  );
}

export default Login;
