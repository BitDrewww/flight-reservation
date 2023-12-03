// loginController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import your user model

const loginController = {
  // Function to authenticate user and send token
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Email doesn't exist" });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Password incorrect' });
      }

      // User matched, create JWT Payload
      const payload = {
        id: user.id,
        email: user.email
      };

      // Sign token
      jwt.sign(
        payload,
        process.env.JWT_SECRET, // Make sure to set this in your .env
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
};

module.exports = loginController;
