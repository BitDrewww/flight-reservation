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

cancelReservation = async (req, res) => {
  try {
    const reservationId = req.params.reservationId;
    db.query('DELETE from Reservation WHERE reservation_id = ?', [reservationId], (error, results) => {
      if (error) {
        console.log("error occured"+ error)
        res.status(500).send({
          message: `Error retrieving flight`,
          error: error.message
        });
      } else {
        res.status(200).json({status:"ok"});
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error cancelling flight' });
  }
};

getMyFlights = (req, res) => {
  const email = req.query.userEmail;
  db.query('SELECT * FROM Flights JOIN Reservation ON Flights.id = Reservation.flight_id AND Reservation.email = ?', [email], (error, results) => {
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
}

module.exports = { findAllFlight, searchFlight, cancelReservation, getMyFlights };
