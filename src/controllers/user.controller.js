const { userCreateService } = require('../services');
const jwt = require('../middlewares/auth');

const userController = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const response = await userCreateService.userService(displayName, email, password, image);

  if (response.status !== 'SUCCESSFUL') {
    return res.status(409).json(response.data);
  }
  
  const { id } = response;
  const token = jwt.loginToken({ id });
  return res.status(201).json({ token });
};

const userGetAllController = async (req, res) => {
  const response = await userCreateService.userGetAllService();
  return res.status(200).json(response.data);
};

const userGetByIdController = async (req, res) => {
  const { id } = req.params;

  const response = await userCreateService.userGetByIdService(id);

  if (response.status !== 'SUCCESSFUL') {
    return res.status(404).json(response.data);
  }

  return res.status(200).json(response.data);
};

module.exports = {
  userController,
  userGetAllController,
  userGetByIdController,
};