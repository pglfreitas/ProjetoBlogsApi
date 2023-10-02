const route = require('express').Router();
const { categoryController } = require('../controllers');
const { categoryMiddlewares, authorization } = require('../middlewares');

route.post(
  '/', 
  categoryMiddlewares,
  authorization.tokenValidation,
  categoryController.categoryCreateController,
);

module.exports = route;