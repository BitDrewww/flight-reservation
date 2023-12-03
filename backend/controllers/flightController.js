// Import the database connection
const db = require('../database/db');

findAllFlight = (req, res) => {
  // Logic to return all flights
  db.query('SELECT * FROM Flights', (error, results) => {
    if (error) {
      res.status(500).send({
        message: 'Error retrieving flights',
        error: error.message
      });
    } else {
      res.status(200).json(results);
    }
  });
};

searchFlight = (req, res) => {
  const date = req.params.date;
  const departure = req.params.departure;
  const arrival = req.params.arrival;
  db.query('SELECT * FROM Flights WHERE flightDate = ? and departure = ? and arrival = ?', [date, departure, arrival], (error, results) => {
    if (error) {
      console.log("error occured"+ error)
      res.status(500).send({
        message: `Error retrieving flight`,
        error: error.message
      });
    } else {
      res.status(200).json(results);
    }
  });
};


// cancel flight notification
const { sendCancellationEmail } = require('../services/emailService');

const cancelFlight = async (req, res) => {
  try {
    const flightId = req.params.id;
    // ...cancellation logic...

    // After successful cancellation, send an email
    await sendCancellationEmail(req.user.email, flightId);

    res.status(200).json({ message: 'Flight cancelled successfully, email sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling flight' });
  }
};

module.exports = { findAllFlight, searchFlight, cancelFlight };
