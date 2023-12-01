const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN_VALUE
  
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
  
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.userId;
      next();
    } catch (error) {
      res.status(403).json({ message: "Token is not valid" });
    }
};

module.exports = authMiddleware;