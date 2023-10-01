const route = require('express').Router();
const { userCreateController } = require('../controllers');
const { userMiddlewares, authorization } = require('../middlewares');

route.post('/', userMiddlewares, userCreateController.userController);
route.get('/', authorization.tokenValidation, userCreateController.userGetAllController);

module.exports = route;