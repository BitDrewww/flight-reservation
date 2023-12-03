// UserRegistration.js

import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = ({ onRegistrationSuccess }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/register', userData);
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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={(newVal) => setUserData((prev) => ({ ...prev, email: newVal.target.value }))}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          onChange={(newVal) => setUserData((prev) => ({ ...prev, password: newVal.target.value }))}
          style={{ marginBottom: '10px' }} // Added margin at the bottom
        />
        
        <button type="submit" style={{ marginTop: '10px' }}>Register</button> {/* Added margin at the top */}
      </form>
    </div>
  );
};

export default UserRegistration;
