// SelectFlights.js
import React, { useState } from 'react';

const SelectFlights = ({ onSelect }) => {
  const [selectedFlight, setSelectedFlight] = useState('');

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
    onSelect(flight); // Pass selected flight to parent component
  };

  return (
    <div>
      <h2>Select Flights</h2>
      <select value={selectedFlight} onChange={(e) => handleFlightSelect(e.target.value)}>
        <option value="">Select a Flight</option>
        {/* Render options dynamically */}
      </select>
    </div>
  );
};

export default SelectFlights;
