// Login.js

import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="text" className="login-input" placeholder="Username" />
        <input type="password" className="login-input" placeholder="Password" />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
