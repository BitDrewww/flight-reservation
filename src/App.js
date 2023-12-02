// App.js

import React, { useState } from 'react';
import './App.css';
import BrowseFlights from './components/BrowseFlights.js';
import FlightResults from './components/FlightResults';
import Booking from './components/Booking';
import NavBar from './components/NavBar/NavBar.js';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import SeatMap from './components/SeatMap';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isBrowseFlightsVisible, setBrowseFlightsVisibility] = useState(true); // Set to true initially
  const [isHomepageVisible, setHomepageVisibility] = useState(false);
  const [isRegisterVisible, setRegisterVisibility] = useState(false);
  const [isLoginVisible, setLoginVisibility] = useState(false);
  const [isSeatMapVisible, setSeatMapVisibility] = useState(false);

  const onSelectFlight = (flight) => {
    setSelectedFlight(flight);
    setBrowseFlightsVisibility(false);
    setHomepageVisibility(false);
    setRegisterVisibility(false);
    setLoginVisibility(false);
    setSeatMapVisibility(true); // Show SeatMap after flight selection
  };

  const toggleBrowseFlights = () => {
    setBrowseFlightsVisibility(!isBrowseFlightsVisible);
    setHomepageVisibility(false);
    setRegisterVisibility(false);
    setLoginVisibility(false);
    setSeatMapVisibility(false); // Hide SeatMap when BrowseFlights is toggled
  };

  const toggleHomepage = () => {
    setHomepageVisibility(!isHomepageVisible);
    setBrowseFlightsVisibility(false);
    setRegisterVisibility(false);
    setLoginVisibility(false);
  };

  const toggleRegister = () => {
    setRegisterVisibility(!isRegisterVisible);
    setHomepageVisibility(false);
    setBrowseFlightsVisibility(false);
    setLoginVisibility(false);
  };

  const toggleLogin = () => {
    setLoginVisibility(!isLoginVisible);
    setHomepageVisibility(false);
    setBrowseFlightsVisibility(false);
    setRegisterVisibility(false);
  };

  return (
    <div className="App">
      <NavBar
        onBrowseFlightsClick={toggleBrowseFlights}
        onHomepageClick={toggleHomepage}
        onRegisterClick={toggleRegister}
        onLoginClick={toggleLogin}
      />
      <header className="App-header">
        {/* You can add any header content here */}
      </header>

      {isBrowseFlightsVisible && <BrowseFlights onSelectFlight={onSelectFlight} />}
      {isHomepageVisible && <Homepage />}
      {isRegisterVisible && <Register />}
      {isLoginVisible && <Login />}
      {selectedFlight && isSeatMapVisible && <SeatMap onSeatSelect={(seat) => console.log(`Selected seat: ${seat}`)} />}
      {selectedFlight && <Booking flight={selectedFlight} />}
      {selectedFlight && <FlightResults onSelectFlight={onSelectFlight} />}
    </div>
  );
}

export default App;
