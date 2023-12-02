// SeatSelection.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = ({ flightId, onSeatSelect, onNext }) => {
  const navigate = useNavigate();
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelect = (seat) => {
    // Update the selected seat
    setSelectedSeat(seat);
  };

  const handleNext = () => {
    // Pass the selected seat to the parent component
    onSeatSelect(selectedSeat);
    // Proceed to the next step (e.g., Payment)
    // Comment out the line below if you want to navigate to the next step via onNext prop
    // onNext();

    // Navigate to the Payment component
    navigate('/payment');
  };

  return (
    <div>
      <h2>Seat Selection</h2>
      <p>Select your preferred seat:</p>
      {/* Add your seat map and selection UI here */}
      <button onClick={handleNext}>Next (Proceed to Payment)</button>
    </div>
  );
};

export default SeatSelection;
