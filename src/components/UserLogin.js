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

  const handleLogin = () => {
    // Send login data to the server
    axios.post('/api/login', loginData)
      .then(response => {
        console.log('Login successful:', response.data);
        onLoginSuccess(); // Redirect or perform other actions on successful login
      })
      .catch(error => console.error('Login error:', error));
  };

  return (
    <div>
      <h2>User Login</h2>
      <form>
        <label>Email:
          <input type="email" name="email" value={loginData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>Password:
          <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
