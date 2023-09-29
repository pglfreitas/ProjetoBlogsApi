const { User } = require('../models');

const userService = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return {
      status: 'CONFLICT',
      data: { message: 'User already registered' },
    };
  }

  const response = await User.create({ displayName, email, password, image });

  return {
    status: 'SUCCESSFUL',
    data: response,
  };
};

module.exports = {
  userService,
};