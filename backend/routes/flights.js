// routes/flights.js
const express = require('express');
const router = express.Router();
const { findAllFlight, searchFlight, cancelReservation, getMyFlights, cancelFlight, createNewFlight } = require('../controllers/flightController');
const { registerUser } = require('../controllers/loginController');
const { reserveFlight } = require('../controllers/paymentController');
router.get('/', adminGetFlights);
router.get('/:date/:departure/:arrival', searchFlight);
router.get('/my-flights', getMyFlights);

router.delete('/:flightId', cancelFlight);
router.delete('/reservation/:reservationId', cancelReservation);
// Route for Make Payment
router.put('/reserve', reserveFlight);
router.post('/', createNewFlight);
// Route for creating users
module.exports = router;
