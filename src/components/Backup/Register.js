// Register.js

import React from 'react';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <input type="text" className="register-input" placeholder="Username" />
        <input type="email" className="register-input" placeholder="Email" />
        <input type="password" className="register-input" placeholder="Password" />
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
