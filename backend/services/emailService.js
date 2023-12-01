// emailService.js
const nodemailer = require('nodemailer');

// Setup nodemailer transporter
const transporter = nodemailer.createTransport({
  // ...configuration...
});

const sendCancellationEmail = async (userEmail, flightId) => {
  // ...email sending logic...
};

module.exports = { sendCancellationEmail };
