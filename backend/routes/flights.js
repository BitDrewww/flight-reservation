// routes/flights.js
const express = require('express');
const router = express.Router();
// const flightController = require('../controllers/flightController');
// cancel flight notification
const { findAllFlight, findOneFlight, createFlight, updateFlight, deleteFlight, cancelFlight } = require('../controllers/flightController');
router.get('/', findAllFlight);
router.get('/:id', findOneFlight);
router.post('/', createFlight);
router.put('/:id', updateFlight);
router.delete('/:id', deleteFlight);

// module.exports = router;

// PUT request to update the flight status to 'cancelled'
//router.put('/cancel/:id', async (req, res) => {
//    try {
//      const flightId = req.params.id;
//      // Logic to cancel the flight by ID using your data model
//      // This would typically involve setting a 'status' field to 'cancelled'
//      // and persisting this change in the database.
//
//      // For now, let's assume a successful cancellation
//      res.status(200).json({ message: 'Flight cancelled successfully' });
//    } catch (error) {
//      res.status(500).json({ message: 'Error cancelling flight' });
//    }
//  });


// Define the route for flight cancellation
router.put('/cancel/:id', cancelFlight);

module.exports = router;
