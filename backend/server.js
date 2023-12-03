// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');

// Create an instance of express
const app = express();

// Middleware 
app.use(cors()); // Use cors middleware for enabling cross-origin requests
app.use(express.json()); // for parsing application/json

// Routes 
const flightRoutes = require('./routes/flights');
// other route imports here...

// Define a route for the root path
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Flight Reservation System Backend' });
});

//Use routes
app.use('/api/flights', flightRoutes);
// use other routes...

// Start the server
const PORT = process.env.PORT || 3001; // Use the PORT from environment variables if it's set
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// cancel flight notification
// const flightRoutes = require('./src/routes/flightRoutes');

// ...other middleware...

// Use the routes
// app.use('/api/flights', flightRoutes);

// ...rest of server setup...

// user login registration
// const express = require('express');
// const authRoutes = require('./routes/authRoutes'); // Adjust the path as per your file structure

app.use(express.json());
// app.use('/api', authRoutes); // Use the auth routes under the '/api' prefix


// app.use('/api/auth', authRoutes); // Mount the auth routes on the /api/auth path

// ... rest of your server setup ...
