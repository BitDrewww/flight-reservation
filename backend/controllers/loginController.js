// loginController.js
const db = require('../database/db');

registerUser = (req, res) => {
  db.query('INSERT into Users (adminFlag, email, pass) VALUES (?, ?, ?)', [false, req.body.email, req.body.password], (error, results) => {
    if (error) {
      res.status(500).send({
        message: 'Failed to register user',
        error: error.message
      });
    } else {
      res.status(200).json(results);
    }
  });
};

login = (req, res) => {
  console.log(req.body.email);
  db.query('SELECT * FROM Users WHERE email = ? LIMIT 1', [req.body.email], (error, results) => {
    if (error) {
      res.status(500).send({
        message: 'Failed to login',
        error: error.message
      });
    } else {
      console.log(results);
      console.log(req.body.password);
      if (results && results[0].pass !== req.body.password) {
        res.status(401).send({
          message: 'Unauthorized'
        });
        return;
      }
      res.status(200).json(results[0]);
    }
  });
}

module.exports = {registerUser, login };
