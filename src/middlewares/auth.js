const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const loginToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '24h',
  });
  return token;
};

const decodeToken = (token) => {
  jwt.verify(token, JWT_SECRET);
};

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ 
      message: 'Token not found',
    });
  }
  const token = authorization.split(' ')[1];

  try {
    decodeToken(token);
    next();
  } catch (err) {
    return res.status(401).json({ 
      message: 'Expired or invalid token',
    });
  }
};

module.exports = {
  loginToken,
  decodeToken,
  tokenValidation,
};