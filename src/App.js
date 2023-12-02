// App.js

import React, { useState } from 'react';
import './App.css';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import Booking from './components/Booking';
import NavBar from './components/NavBar/NavBar.js';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isFlightSearchVisible, setFlightSearchVisibility] = useState(false);
  const [isHomepageVisible, setHomepageVisibility] = useState(true);
  const [isRegisterVisible, setRegisterVisibility] = useState(false);
  const [isLoginVisible, setLoginVisibility] = useState(false);

  const onSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setFlightSearchVisibility(false);
    setHomepageVisibility(false);
    setRegisterVisibility(false);
    setLoginVisibility(false);
  };

  const toggleFlightSearch = () => {
    setFlightSearchVisibility(!isFlightSearchVisible);
    setHomepageVisibility(false);
    setRegisterVisibility(false);
    setLoginVisibility(false);
  };

  const toggleHomepage = () => {
    setHomepageVisibility(!isHomepageVisible);
    setFlightSearchVisibility(false);
    setRegisterVisibility(false);
    setLoginVisibility(false);
  };

  const toggleRegister = () => {
    setRegisterVisibility(!isRegisterVisible);
    setHomepageVisibility(false);
    setFlightSearchVisibility(false);
    setLoginVisibility(false);
  };

  const toggleLogin = () => {
    setLoginVisibility(!isLoginVisible);
    setHomepageVisibility(false);
    setFlightSearchVisibility(false);
    setRegisterVisibility(false);
  };

  return (
    <div className="App">
      <NavBar
        onFlightSearchClick={toggleFlightSearch}
        onHomepageClick={toggleHomepage}
        onRegisterClick={toggleRegister}
        onLoginClick={toggleLogin}
      />
      <header className="App-header">
        {/* You can add any header content here */}
      </header>

      {isFlightSearchVisible && <FlightSearch />}
      {isHomepageVisible && <Homepage />}
      {isRegisterVisible && <Register />}
      {isLoginVisible && <Login />}
      {selectedFlight && <Booking flight={selectedFlight} />}
      {selectedFlight && <FlightResults onSelectFlight={onSelectFlight} />}
    </div>
  );
}

export default App;
