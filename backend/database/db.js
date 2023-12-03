require('dotenv').config();
const mysql = require('mysql');

// Database configuration is pulled from environment variables for security
const dbConfig = {
  host: 'localhost', 
  user: 'root', 
  password: "3982",
  database: 'world' 
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Connect to the MySQL server
connection.connect(error => {
  if (error) {
    console.error('Error connecting to the MySQL server:', error.message);
    process.exit(1); 
  }
  console.log('Connected to the MySQL server.');
});

module.exports = connection;

