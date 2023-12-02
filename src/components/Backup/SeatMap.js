import React, { useState } from 'react';

// Mock data representing seats; this would be fetched or generated based on actual flight data
const mockSeats = [
  ['1A', '1B', '1C', 'Aisle', '1D', '1E', '1F'],
  ['2A', '2B', '2C', 'Aisle', '2D', '2E', '2F'],
  // ...more rows as needed
];

function SeatMap({ onSeatSelect }) {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
    onSeatSelect(seat); // This function would be passed down from the booking component
  };

  return (
    <div>
      <h3>Select Your Seat</h3>
      <div className="seat-map">
        {mockSeats.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((seat, seatIndex) => (
              <button
                key={seatIndex}
                className={`seat ${seat === selectedSeat ? 'selected' : ''}`}
                onClick={() => handleSeatClick(seat)}
                disabled={seat === 'Aisle'}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeatMap;
