import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  let navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="/path-to-your-logo.png" alt="B Airways" />
        </div>
        <div className="nav-links">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/team")}>Team</button>
        </div>
        <div className="auth-links">
          <button onClick={() => navigate("/signin")}>Login</button>
          <button onClick={() => navigate("/signup")}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
