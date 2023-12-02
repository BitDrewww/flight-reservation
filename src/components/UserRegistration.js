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

  const handleRegistration = () => {
    // Send registration data to the server
    axios.post('/api/register', userData)
      .then(response => {
        console.log('Registration successful:', response.data);
        onRegistrationSuccess(); // Redirect or perform other actions on successful registration
      })
      .catch(error => console.error('Registration error:', error));
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form>
        <label>Username:
          <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
        </label>
        <br />
        <label>Email:
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>Password:
          <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleRegistration}>Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
