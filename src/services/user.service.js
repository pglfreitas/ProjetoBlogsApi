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

const userGetAllService = async () => {
  const response = await User.findAll({ attributes: { exclude: ['password'] } });

  return {
    status: 'SUCCESSFUL',
    data: response,
  };
};

const userGetByIdService = async (id) => {
  const response = await User.findOne({ 
    where: { id }, 
    attributes: { exclude: ['password'] },
  });

  if (!response) {
    return {
      status: 'NOT_FOUND',
      data: { message: 'User does not exist' },
    };
  }

  return {
    status: 'SUCCESSFUL',
    data: response,
  };
};

module.exports = {
  userService,
  userGetAllService,
  userGetByIdService,
};