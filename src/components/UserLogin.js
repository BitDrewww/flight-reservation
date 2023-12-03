// UserLogin.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserLogin = ({ onLoginSuccess }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', loginData);
      setUser(response.data);
      navigate('/modify-flights');
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
          onChange={(newVal) => setLoginData((prev) => ({ ...prev, email: newVal.target.value }))}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={(newVal) => setLoginData((prev) => ({ ...prev, password: newVal.target.value }))}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <button type="submit" style={{ marginTop: '10px' }}>Login</button> {/* Added margin at the top */}
      </form>
    </div>
  );
};

export default UserLogin;
