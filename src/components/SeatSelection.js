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

  // Example seat map (you can customize this based on your actual data)
  const seatMap = [
    ['1A', '1B', '1C', '1D'],
    ['2A', '2B', '2C', '2D'],
    ['3A', '3B', '3C', '3D'],
    // Add more rows and seats as needed
  ];

  return (
    <div>
      <h2>Seat Selection</h2>
      <p>Select your preferred seat:</p>

      {/* Display the seat map */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
        {seatMap.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((seat, seatIndex) => (
              <button
                key={seatIndex}
                style={{ width: '200px', height: '200px', backgroundColor: selectedSeat === seat ? 'blue' : 'gray' }}
                onClick={() => handleSeatSelect(seat)}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>

      <button style={{ marginTop: '10px', marginBottom: '20px' }} onClick={handleNext}>Next (Proceed to Payment)</button>
    </div>
  );
};

export default SeatSelection;
