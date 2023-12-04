// App.js
import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/Homepage.js'; 
import BrowseFlights from './components/BrowseFlights';
import SeatSelection from './components/SeatSelection';
import Payment from './components/Payment';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import ModifyFlight from './components/ModifyFlight.js';
import './Styles.css'; // Import the CSS file
import { AuthContextProvider } from './components/auth/AuthContextProvider.jsx';
import { AuthContext } from './components/auth/AuthContext.jsx';
import { AdminFlights } from './components/AdminFlights.jsx';

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
  <nav className="navbar">
    <div className="navbar-logo">
      <img src="/logoNav.png" alt="Logo" className="logo" />
      <span className="navbar-text">Flight Reservation App</span>
    </div>
    <div className="navbar-container">
    <ul className="navbar-list">
      <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
      <li className="navbar-item"><Link to="/browse-flights" className="navbar-link">Browse Flights</Link></li>
      <li className="navbar-item"><Link to="/modify-flights" className="navbar-link">Modify Flights</Link></li>
      {user && user.adminflag !== 0 && (
        <li className="navbar-item"><Link to="/admin" className="navbar-link">Admin</Link></li>
      )}
    </ul>
    {user ? (
      <div style={{color: "#fff", display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}><div>{user.email}</div><div>{user.adminflag !== 0 ? '(Admin)' : null}</div></div>
    ): (
    <div className="navbar-list">
      <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
      <li className="navbar-item"><Link to="/register" className="navbar-link">Register</Link></li>
    </div>
    )}
    </div>
  </nav>
    </>
  )

};

const App = () => {
  // Placeholder state to manage selected flight and seat
  const [selectedFlight, setSelectedFlight] = React.useState(null);
  const [selectedSeat, setSelectedSeat] = React.useState(null);

  return (
    <AuthContextProvider>
      <Router>
        <div>
          <NavBar /> {/* Include the navigation bar */}
          <div style={{ padding: '10px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/browse-flights"
              element={<BrowseFlights onFlightSelect ={(flight) => setSelectedFlight(flight)}/>}
            />
            <Route
              path="/seat-selection/:flightId"
              element={<SeatSelection onSeatSelect={(seat) => setSelectedSeat(seat)} onNext={() => console.log('Navigate to Payment')} />}
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
              element={<UserLogin />}
            />
            <Route path="/modify-flights" element={<ModifyFlight />} />
            <Route path="/admin" element={<AdminFlights />} />
          </Routes>

          </div>
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
