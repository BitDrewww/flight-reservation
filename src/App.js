import React, { useState } from 'react';
import Homepage from './components/Homepage';
import './App.css';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import Booking from './components/Booking';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const onSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      </header>
      <Homepage /> {/* Display the Homepage component */}
      <FlightSearch />
      <FlightResults onSelectFlight={onSelectFlight} />
      {selectedFlight && <Booking flight={selectedFlight} />}
    </div>
  );
}

export default App;


