import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FlightSearch from './components/FlightSearch';
import FlightResults from './components/FlightResults';
import Booking from './components/Booking';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const onSelectFlight = (flight) => {
    setSelectedFlight(flight);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FlightSearch />
      <FlightResults onSelectFlight={onSelectFlight} />
      {selectedFlight && <Booking flight={selectedFlight} />}
    </div>
  );
}

export default App;


