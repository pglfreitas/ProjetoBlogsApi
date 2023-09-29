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

module.exports = {
  loginToken,
  decodeToken,
};