// routes/flights.js
const express = require('express');
const router = express.Router();
const { findAllFlight, searchFlight, cancelReservation, getMyFlights } = require('../controllers/flightController');
const { registerUser } = require('../controllers/loginController');
const { reserveFlight } = require('../controllers/paymentController');
router.get('/', findAllFlight);
router.get('/:date/:departure/:arrival', searchFlight);
router.get('/my-flights', getMyFlights);

// Define the route for flight cancellation
router.delete('/cancel/:reservationId', cancelReservation);
// Route for Make Payment
router.put('/reserve', reserveFlight);
// Route for creating users
router.post('/register', registerUser);
module.exports = router;
