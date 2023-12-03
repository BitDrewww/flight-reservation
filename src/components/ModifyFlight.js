import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './auth/AuthContext';

const ModifyFlight = () => {
  const [bookedFlights, setBookedFlights] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchBookedFlights();
  }, []);

  const fetchBookedFlights = async () => {
    if (user) {
      const res = await axios.get(`http://localhost:3001/api/flights/my-flights?userEmail=${user.email}`);
      setBookedFlights(res.data);
    }
  };

  const handleCancelFlight = async (flightId) => {
    try {
      console.log(`Canceling flight with ID: ${flightId}`);
      await axios.delete(`http://localhost:3001/api/flights/reservation/${flightId}`)
      await fetchBookedFlights();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Modify Flights</h2>
      {user ? (
        <div>
        <h3>List of Booked Flights:</h3>
        {bookedFlights.length > 0 ? (
      <ul>
        {bookedFlights.map((flight) => (
          <li key={flight.id}>
            <p>Date: {new Date(flight.flightDt).toLocaleString()}</p>
            <p>Departure: {flight.departure}</p>
            <p>Destination: {flight.arrival}</p>
            <p>Price: {flight.price}</p>
            {/* Add more flight details as needed */}
            <button onClick={() => handleCancelFlight(flight.reservation_id)}>Cancel</button>
          </li>
        ))}
      </ul>

        ) : (
          <p>No flights booked.</p>
        )}
      </div>
      ) : (
        <p>Please login to view your booked flights.</p>
      )}
    </div>
  );
};

export default ModifyFlight;
