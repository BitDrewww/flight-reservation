// MakePayment.js

import React, { useState } from 'react';

const MakePayment = ({ selectedFlight }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // Perform payment processing logic here
    // You can send payment details and selectedFlight to the server, for example
    console.log('Payment processed successfully:', { cardNumber, expiryDate, cvv, selectedFlight });
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <form>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handlePayment}>
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default MakePayment;
