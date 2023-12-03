// routes/flights.js
const express = require('express');
const router = express.Router();
const { findAllFlight, searchFlight,  cancelFlight } = require('../controllers/flightController');
const { reserveFlight } = require('../controllers/paymentController');
router.get('/', findAllFlight);
router.get('/:date/:departure/:arrival', searchFlight);

// Define the route for flight cancellation
router.put('/cancel/:id', cancelFlight);
router.put('/reserve/:flightId/:seatId/:price', reserveFlight);
module.exports = router;
