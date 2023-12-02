// NavBar.js

import React from 'react';

const NavBar = ({ onFlightSearchClick, onHomepageClick, onRegisterClick, onLoginClick }) => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <img
          src={process.env.PUBLIC_URL + '/logo.png'}
          alt="YourLogo"
          className="navbar-logo"
        />
        <span className="brand-text">Flight Reservation App</span>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button onClick={onHomepageClick} className="nav-link">
            Home
          </button>
        </li>
        <li className="nav-item">
          <button onClick={onFlightSearchClick} className="nav-link">
            Flight Search
          </button>
        </li>
        <li className="nav-item">
          <button onClick={onRegisterClick} className="nav-link">
            Register
          </button>
        </li>
        <li className="nav-item">
          <button onClick={onLoginClick} className="nav-link">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
