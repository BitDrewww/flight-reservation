// Import the database connection
const db = require('../database/db');

exports.findAll = (req, res) => {
  // Logic to return all flights
  db.query('SELECT * FROM flights', (error, results) => {
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

exports.findOne = (req, res) => {
  // Logic to return a single flight by ID
  const id = req.params.id;
  db.query('SELECT * FROM flights WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send({
        message: `Error retrieving flight with id ${id}`,
        error: error.message
      });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

exports.create = (req, res) => {
  // Logic to create a new flight
  const newFlight = req.body; // Assuming you have middleware to parse the body
  db.query('INSERT INTO flights SET ?', newFlight, (error, results) => {
    if (error) {
      res.status(500).send({
        message: 'Error creating new flight',
        error: error.message
      });
    } else {
      res.status(201).json({ id: results.insertId, ...newFlight });
    }
  });
};

exports.update = (req, res) => {
  // Logic to update a flight by ID
  const id = req.params.id;
  const flightUpdates = req.body;
  db.query(
    'UPDATE flights SET ? WHERE id = ?',
    [flightUpdates, id],
    (error, results) => {
      if (error) {
        res.status(500).send({
          message: `Error updating flight with id ${id}`,
          error: error.message
        });
      } else {
        res.status(200).json({ id: id, ...flightUpdates });
      }
    }
  );
};

exports.delete = (req, res) => {
  // Logic to delete a flight by ID
  const id = req.params.id;
  db.query('DELETE FROM flights WHERE id = ?', [id], (error, results) => {
    if (error) {
      res.status(500).send({
        message: `Error deleting flight with id ${id}`,
        error: error.message
      });
    } else {
      res.status(200).json({ message: `Flight with id ${id} successfully deleted` });
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

module.exports = { cancelFlight };
