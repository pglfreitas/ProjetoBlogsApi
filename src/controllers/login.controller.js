const { userLoginService } = require('../services');
const jwt = require('../middlewares/auth');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const response = await userLoginService.loginService(email, password);

  if (response.status !== 'SUCCESSFUL') {
    return res.status(400).json(response.data);
  }
  
  const { id } = response;
  const token = jwt.loginToken({ id });
  return res.status(200).json({ token });
};

module.exports = {
  loginController,
};