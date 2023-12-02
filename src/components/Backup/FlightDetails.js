// FlightDetails.js
import React from 'react';

const FlightDetails = ({ flight }) => {
  const handleCancelFlight = async () => {
    try {
      const response = await fetch(`/api/flights/cancel/${flight.id}`, {
        method: 'PUT',
        // Include headers, such as authentication tokens if required
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Or update the state to show confirmation
      } else {
        alert(data.message); // Or update the state to show an error
      }
    } catch (error) {
      alert('Network error: Could not cancel the flight.');
    }
  };

  return (
    <div>
      {/* Render flight details */}
      <button onClick={handleCancelFlight}>Cancel Flight</button>
    </div>
  );
};

export default FlightDetails;
