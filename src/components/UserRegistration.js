// UserRegistration.js

import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = ({ onRegistrationSuccess }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', userData);
      console.log('Registration successful:', response.data);
      onRegistrationSuccess();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleRegistration}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <button type="submit" style={{ marginTop: '10px' }}>Register</button> {/* Added margin at the top */}
      </form>
    </div>
  );
};

export default UserRegistration;
