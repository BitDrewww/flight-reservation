// Payment.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Payment = (props) => {
  const [flightDetails, setFlightDetails] = useState(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        // Check if props.params is defined before accessing flightId
        if (props.params && props.params.flightId) {
          const response = await axios.get(`/api/flights/${props.params.flightId}`);
          setFlightDetails(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlightDetails();
  }, [props.params]); // Include props.params in the dependency array

  const handlePaymentSubmit = () => {
    // Implement your payment logic here
    // ...

    // Trigger the onPaymentSuccess callback
    props.onPaymentSuccess();
  };

  return (
    <div>
      <h2>Payment Form</h2>
      {flightDetails && (
        <div>
          <h3>Flight Details</h3>
          <p>Name: {flightDetails.name}</p>
          <p>Departure: {flightDetails.departure}</p>
          <p>Destination: {flightDetails.destination}</p>
        </div>
      )}
      <form>
        {/* Add your credit card form fields here */}
        <label>Card Number:</label>
        <input type="text" />
        <label>Expiration Date:</label>
        <input type="text" />
        <label>CVV:</label>
        <input type="text" />
        <button type="button" onClick={handlePaymentSubmit}>Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
