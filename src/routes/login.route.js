const route = require('express').Router();
const { userLoginController } = require('../controllers');
const { loginMiddlewares } = require('../middlewares');

route.post('/', loginMiddlewares, userLoginController.loginController);

module.exports = route;