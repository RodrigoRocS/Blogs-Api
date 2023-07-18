const { getPayload } = require('../auth/authtentication');

const hasBearer = (token) => {
 const validBearer = token.split(' ')[0];
 if (validBearer === 'Bearer') { return token.split(' ')[1]; }
 return token;
};

const validateJwt = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = hasBearer(authorization);
    
    const payload = getPayload(token);
    req.payload = payload;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    res.status(500).json({
      message: 'Error accessing the endpoint',
      error: 'A valid token is required to access this endpoint',
    });
  }
};

module.exports = validateJwt;
