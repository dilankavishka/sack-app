const jwt = require('jsonwebtoken');
const secret = 'my_jwt_secret'; // Use an environment variable for this in a real application

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Failed to authenticate token' });
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports = authMiddleware;
