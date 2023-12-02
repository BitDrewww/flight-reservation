// NavBar.js

import React from 'react';

const NavBar = () => {
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
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/flights" className="nav-link">
            Flights
          </a>
        </li>
        <li className="nav-item">
          <a href="/register" className="nav-link">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
