import React from 'react';

// This is mock data, you will replace this with actual data fetched from the server
const mockFlightData = [
  {
    id: 1,
    from: 'New York',
    to: 'London',
    departureTime: '10:00 AM',
    arrivalTime: '10:00 PM',
    price: '$500',
    duration: '8h'
  },
  // ... add more mock flights as needed
];

// Make sure to accept the props in the function parameter
function FlightResults({ onSelectFlight }) {
  // In a real app, flight data would be passed down as props or fetched from a backend API
  const flights = mockFlightData;

  return (
    <div>
      <h2>Available Flights:</h2>
      {flights.length > 0 ? (
        <ul>
          {flights.map((flight) => (
            <li key={flight.id}>
              <div>
                <strong>From:</strong> {flight.from} <strong>To:</strong> {flight.to}
              </div>
              <div>
                <strong>Departure:</strong> {flight.departureTime} <strong>Arrival:</strong> {flight.arrivalTime}
              </div>
              <div>
                <strong>Duration:</strong> {flight.duration} <strong>Price:</strong> {flight.price}
              </div>
              {/* When the button is clicked, the onSelectFlight function passed as a prop is called with the flight as its argument */}
              <button onClick={() => onSelectFlight(flight)}>Select This Flight</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights available.</p>
      )}
    </div>
  );
}

export default FlightResults;
