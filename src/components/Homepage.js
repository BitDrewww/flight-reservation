// HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file

const HomePage = () => (
  <div className="homepage-container">
    <img src="/logo.png" alt="Logo" className="logo" />
    <div className="title">Flight Reservation App</div>
    <div className="description">
      Welcome to our Flight Reservation App. Plan your journey with ease and convenience.
    </div>
  </div>
);

export default HomePage;
