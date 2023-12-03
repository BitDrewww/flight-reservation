// Payment.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Payment = (props) => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        // Dummy flight data with a 'price' property
        const dummyFlightData = {
          name: 'Sample Flight',
          departure: 'City A',
          destination: 'City B',
          price: 500, // Dummy price in dollars
        };

        setFlightDetails(dummyFlightData);
        setSubtotal(dummyFlightData.price);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlightDetails();
  }, []);

  const handlePaymentSubmit = () => {
    // Implement your payment logic here
    // ...

    // Trigger the onPaymentSuccess callback
    props.onPaymentSuccess();
  };

  return (
    <div>
      <h2>Payment</h2>
      {flightDetails && (
        <div>
          <h3>Flight Details</h3>
          <p>Name: {flightDetails.name}</p>
          <p>Departure: {flightDetails.departure}</p>
          <p>Destination: {flightDetails.destination}</p>
        </div>
      )}

      <div>
        <h3>Payment Details</h3>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
      </div>

      <form>
        {/* Add your credit card form fields here */}
        <label>Card Number:   </label>
        <input type="text" />
        <label>  Expiration Date: </label>
        <input type="text" />
        <label>   CVV:   </label>
        <input type="text" />
        <button type="button" onClick={handlePaymentSubmit}>
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
