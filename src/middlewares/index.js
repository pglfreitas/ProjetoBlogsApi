const loginMiddlewares = require('./loginValidation');
const userMiddlewares = require('./userValidation');
const authorization = require('./auth');
const categoryMiddlewares = require('./categoryValidation');

module.exports = {
  loginMiddlewares,
  userMiddlewares,
  authorization,
  categoryMiddlewares,
};