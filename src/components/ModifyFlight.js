import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ModifyFlight = () => {
  const [bookedFlights, setBookedFlights] = useState([]);

  // Dummy data for testing
  const dummyFlights = [
    { id: 1, name: 'Dummy Flight 1', departure: 'City A', destination: 'City B', price: '$500' },
    { id: 2, name: 'Dummy Flight 2', departure: 'City C', destination: 'City D', price: '$500'  },
    // Add more dummy flights as needed
  ];

  const fetchBookedFlights = async () => {
    try {
      // For testing purposes, use the dummyFlights data
      setBookedFlights(dummyFlights);

      // Uncomment the following line when testing with real API data
      // const response = await axios.get('/api/booked-flights');
      // setBookedFlights(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBookedFlights();
  }, []);

  const handleCancelFlight = async (flightId) => {
    try {
      // Assuming there is an API endpoint to cancel a booked flight
      // For testing purposes, log a message
      console.log(`Canceling flight with ID: ${flightId}`);

      // Uncomment the following line when testing with real API data
      // await axios.post(`/api/cancel-flight/${flightId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Modify Flights</h2>
      <h3>List of Booked Flights:</h3>
      <ul>
        {bookedFlights.map((flight) => (
          <li key={flight.id}>
            <p>Name: {flight.name}</p>
            <p>Departure: {flight.departure}</p>
            <p>Destination: {flight.destination}</p>
            <p>Price: {flight.price}</p>
            {/* Add more flight details as needed */}
            <button onClick={() => handleCancelFlight(flight.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModifyFlight;
