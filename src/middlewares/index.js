const loginMiddlewares = require('./loginValidation');
const userMiddlewares = require('./userValidation');
const authorization = require('./auth');

module.exports = {
  loginMiddlewares,
  userMiddlewares,
  authorization,
};