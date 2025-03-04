import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const LoginPage = () => {
    const [form, setForm] = useState({
        name: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const togglePasswordVisibility = () => {
        setForm({
            ...form,
            showPassword: !form.showPassword,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your API endpoint
        const apiUrl = 'https://your-api-endpoint.com/login';

        axios.post(apiUrl, {
            name: form.name,
            password: form.password,
        })
        .then(response => {
            console.log('Login successful:', response.data);
            // Handle successful login
        })
        .catch(error => {
            console.error('Login failed:', error);
            // Handle login error
        });
    };

    return (
        <div className="login-container">
            
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type={form.showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="checkbox"
                    checked={form.showPassword}
                    onChange={togglePasswordVisibility}
                /> Show Password
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
