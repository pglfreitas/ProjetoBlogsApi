const route = require('express').Router();
const { userCreateController } = require('../controllers');
const { userMiddlewares } = require('../middlewares');

route.post('/', userMiddlewares, userCreateController.userController);

module.exports = route;