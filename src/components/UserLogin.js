// UserLogin.js
import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = ({ onLoginSuccess }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', loginData);
      console.log('Login successful:', response.data);
      onLoginSuccess();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <button type="submit" style={{ marginTop: '10px' }}>Login</button> {/* Added margin at the top */}
      </form>
    </div>
  );
};

export default UserLogin;
