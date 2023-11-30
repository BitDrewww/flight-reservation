// Payment.js
import React, { useState } from 'react';
// Import necessary hooks and components from a payment gateway library, e.g., Stripe

const Payment = ({ totalPrice, onPaymentSuccess, onPaymentFailure }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  // Submit payment info to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the payment API (e.g., Stripe) and handle frontend tokenization if required
    // This is a pseudo-function. Replace with your payment gateway's method
    const { token, error } = await tokenizePaymentDetails(paymentInfo);

    if (error) {
      onPaymentFailure(error);
      return;
    }

    // Send the token to your backend to process the payment
    // Your backend will then send the token to the payment gateway to complete the transaction
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, amount: totalPrice })
      });

      const data = await response.json();
      if (data.success) {
        onPaymentSuccess(data);
      } else {
        onPaymentFailure(data);
      }
    } catch (error) {
      onPaymentFailure(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Payment Details</h3>
      <input
        type="text"
        name="cardNumber"
        value={paymentInfo.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        required
      />
      <input
        type="text"
        name="expiryDate"
        value={paymentInfo.expiryDate}
        onChange={handleChange}
        placeholder="MM/YY"
        required
      />
      <input
        type="text"
        name="cvv"
        value={paymentInfo.cvv}
        onChange={handleChange}
        placeholder="CVV"
        required
      />
      <input
        type="text"
        name="cardholderName"
        value={paymentInfo.cardholderName}
        onChange={handleChange}
        placeholder="Cardholder Name"
        required
      />
      <button type="submit">Pay {totalPrice}</button>
    </form>
  );
};

export default Payment;
