const route = require('express').Router();
const { postController } = require('../controllers');
const { authorization } = require('../middlewares');

route.get('/', authorization.tokenValidation, postController.postGetAllController);

module.exports = route;