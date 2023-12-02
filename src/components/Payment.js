// Payment.js
import React, { useState } from 'react';

const Payment = ({ selectedFlight, selectedSeat, onPaymentSuccess }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    // Other payment details
  });

  const handlePayment = () => {
    // Process payment logic
    // Call onPaymentSuccess if payment is successful
    onPaymentSuccess();
  };

  return (
    <div>
      <h2>Make Payment</h2>
      {/* Display payment form */}
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
