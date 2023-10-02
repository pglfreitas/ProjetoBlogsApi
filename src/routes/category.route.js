const route = require('express').Router();
const { categoryController } = require('../controllers');
const { categoryMiddlewares, authorization } = require('../middlewares');

route.post(
  '/', 
  categoryMiddlewares,
  authorization.tokenValidation,
  categoryController.categoryCreateController,
);
route.get('/', authorization.tokenValidation, categoryController.categoryGetAllController);

module.exports = route;