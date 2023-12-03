// Import the database connection
const db = require('../database/db');

adminGetFlights = (req, res) => {
  db.query('SELECT * FROM Flights', (error, results) => {
    if (error) {
      res.status(500).send({
        message: 'Error retrieving flights',
        error: error.message
      });
    } else {
      const flights = results;
      db.query('SELECT * FROM Reservation', (error, results) => {
        if (error) {
          res.status(500).send({
            message: 'Error retrieving reservations',
            error: error.message
          });
        } else {
          const reservations = results;
          res.status(200).json(flights.map((flight) => {
            const reservationsForFlight = reservations.filter((reservation) => reservation.flight_id === flight.id);
            return {
              ...flight,
              reservations: reservationsForFlight
            };
          }));
        }
      });
    }
  });
};

createNewFlight = (req, res) => {
  const { flightDt, departure, arrival, price, seats } = req.body;
  db.query('INSERT INTO Flights (flightDt, departure, arrival, price) VALUES (?, ?, ?, ?)', [flightDt, departure, arrival, price, seats], (error, results) => {
    if (error) {
      res.status(500).send({
        message: 'Error creating new flight',
        error: error.message
      });
    } else {
      res.status(200).json({ status: 'ok' });
    }
  });
}

searchFlight = (req, res) => {
  const date = req.params.date;
  const departure = req.params.departure;
  const arrival = req.params.arrival;
  db.query('SELECT * FROM Flights WHERE DATE(flightDt) = ? and departure = ? and arrival = ?', [date, departure, arrival], (error, results) => {
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

createFlight = (req, res) => {
  const { datetime, departure, arrival, price } = req.body;
  db.query('INSERT INTO Flights (flightDt, departure, arrival, price) VALUES (?, ?, ?, ?)', [datetime, departure, arrival, price], (error, results) => {
    if (error) {
      res.status(500).send({
        message: 'Error creating new flight',
        error: error.message
      });
    } else {
      res.status(200).json({ status: 'ok' });
    }
  });
}

cancelFlight = (req, res) => {
  const flightId = req.params.flightId;
  db.query('DELETE from Flights WHERE id = ?', [flightId], (error, results) => {
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
}

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

module.exports = { adminGetFlights, createNewFlight, searchFlight, cancelReservation, getMyFlights, cancelFlight };
