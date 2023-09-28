const { User } = require('../models');

const loginService = async (email, password) => {
  const response = await User.findOne({ where: { email, password } });
  if (!response) {
    return {
      status: 'BAD_REQUEST',
      data: { message: 'Invalid fields' },
    };
  }
  return {
    status: 'SUCCESSFUL',
    data: response,
  };
};

module.exports = {
  loginService,
};