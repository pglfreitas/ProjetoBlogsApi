const { userLoginService } = require('../services');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const response = await userLoginService.loginService(email, password);
  if (response.status !== 'SUCCESSFUL') {
    return res.status(400).json(response.data);
  }
  return res.status(200).json(response.data);
};

module.exports = {
  loginController,
};