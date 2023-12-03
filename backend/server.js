// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');

// Create an instance of express
const app = express();

// Middleware 
app.use(cors()); // Use cors middleware for enabling cross-origin requests
app.use(express.json()); // for parsing application/json

// Routes 
const authRoutes = require('./routes/auth');
const flightRoutes = require('./routes/flights');
// other route imports here...

// Define a route for the root path
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Flight Reservation System Backend' });
});

//Use routes
app.use('/api/flights', flightRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001; // Use the PORT from environment variables if it's set
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
