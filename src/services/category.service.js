const { Category } = require('../models');

const categoryCreateService = async (name) => {  
  const response = await Category.create({ name });
  
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

const categoryGetAllService = async () => {
  const response = await Category.findAll();
  
  return {
    status: 'SUCCESSFUL',
    data: response,
  };
};

module.exports = {
  categoryCreateService,
  categoryGetAllService,
};