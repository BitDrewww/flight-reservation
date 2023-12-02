// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BrowseFlights from './components/BrowseFlights';
import SelectFlights from './components/SelectFlights';
import SeatSelection from './components/SeatSelection';
import Payment from './components/Payment';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import './styles.css'; // Import the CSS file

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src="/logo.png" alt="Logo" className="logo" />
      <span className="navbar-text">Flight Reservation App</span>
    </div>
    <ul className="navbar-list">
      <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
      <li className="navbar-item"><Link to="/browse-flights" className="navbar-link">Browse Flights</Link></li>
      <li className="navbar-item"><Link to="/register" className="navbar-link">Register</Link></li>
      <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
    </ul>
  </nav>
);

const App = () => {
  // Placeholder state to manage selected flight and seat
  const [selectedFlight, setSelectedFlight] = React.useState(null);
  const [selectedSeat, setSelectedSeat] = React.useState(null);

  return (
    <Router>
      <div>
        <NavBar /> {/* Include the navigation bar */}
        <Routes>
        <Route
  path="/payment/:flightId"
  element={<Payment selectedFlight={selectedFlight} onPaymentSuccess={() => console.log('Payment successful')} />}
/>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/browse-flights"
            element={<BrowseFlights />}
          />
          <Route
            path="/select-flights"
            element={<SelectFlights onSelect={(flight) => setSelectedFlight(flight)} />}
          />
          <Route
            path="/seat-selection"
            element={<SeatSelection flightId={selectedFlight} onSeatSelect={(seat) => setSelectedSeat(seat)} />}
          />
          <Route
            path="/payment"
            element={<Payment
              selectedFlight={selectedFlight}
              selectedSeat={selectedSeat}
              onPaymentSuccess={() => {
                // Handle payment success, e.g., show a success message or redirect
                console.log('Payment successful');
              }}
            />}
          />
          <Route
            path="/register"
            element={<UserRegistration
              onRegistrationSuccess={() => {
                // Handle successful registration, e.g., show a success message or redirect
                console.log('Registration successful');
              }}
            />}
          />
          <Route
            path="/login"
            element={<UserLogin
              onLoginSuccess={() => {
                // Handle successful login, e.g., show a success message or redirect
                console.log('Login successful');
              }}
            />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
