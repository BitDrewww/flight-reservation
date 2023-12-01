require('dotenv').config();
const mysql = require('mysql');

// Database configuration is pulled from environment variables for security
const dbConfig = {
  host: process.env.DB_HOST || 'localhost', // Default to 'localhost' if not set
  user: process.env.DB_USER || 'flight_user', // Default to 'flight_user' if not set
  password: process.env.DB_PASS, // There's no default for passwords, it should be set in .env
  database: process.env.DB_NAME || 'flight_reservation' // Default to 'flight_reservation' if not set
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Connect to the MySQL server
connection.connect(error => {
  if (error) {
    console.error('Error connecting to the MySQL server:', error.message);
    process.exit(1); // Exit the process with an error code
  }
  console.log('Connected to the MySQL server.');
});

module.exports = connection;

