// authRoutes.js

// Importing necessary modules
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Make sure to uncomment this and set the correct path
const authMiddleware = require('../middleware/authMiddleware'); // Correct path for middleware
const loginController = require('../controllers/loginController'); // Importing the login controller

const router = express.Router();

/**
 * POST /register
 * Route for registering a new user.
 */
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Hashing password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Creating a new user instance
        const newUser = new User({ email, password: hashedPassword });
        // Saving the new user to the database
        await newUser.save();

        // Sending successful response
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user" });
    }
});

/**
 * POST /login
 * Route for logging in a user and returning a JWT token.
 */
router.post('/login', loginController.login);

/**
 * GET /protected-route
 * Example of a protected route that requires authentication.
 */
router.get('/protected-route', authMiddleware, (req, res) => {
    res.json({ message: 'You have accessed a protected route' });
});

// Exporting router for use in other parts of the application
module.exports = router;


  