import React, { useState } from 'react';
import SeatMap from './SeatMap';
// ... any other imports

function Booking({ flight }) {
  const [passenger, setPassenger] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // ... add other fields as necessary
  });

  const [selectedSeat, setSelectedSeat] = useState('');

  const handleSeatSelection = (seat) => {
    setSelectedSeat(seat);
    // Additional logic for seat selection can be added here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassenger({ ...passenger, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, 
    // possibly sending the data to a backend server
    console.log('Passenger Details:', passenger);
    console.log('Selected Seat:', selectedSeat);
    // Proceed to the next booking step or show confirmation
  };

  return (
    <div>
      <h2>Booking for Flight {flight.id}</h2>
      <SeatMap onSeatSelect={handleSeatSelection} />
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={passenger.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={passenger.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={passenger.email}
            onChange={handleInputChange}
            required
          />
        </label>
        {/* Add additional fields as necessary */}
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking;

