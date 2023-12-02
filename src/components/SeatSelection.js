// SeatSelection.js
import React, { useState } from 'react';

const SeatSelection = ({ flightId, onSeatSelect }) => {
  const [selectedSeat, setSelectedSeat] = useState('');

  const handleSeatSelect = (seat) => {
    setSelectedSeat(seat);
    onSeatSelect(seat); // Pass selected seat to parent component
  };

  return (
    <div>
      <h2>Seat Selection</h2>
      {/* Display seat map and allow seat selection */}
    </div>
  );
};

export default SeatSelection;
