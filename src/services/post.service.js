const { BlogPost, Category, User } = require('../models');

const postGetAllService = async () => {
  const response = await BlogPost.findAll({
    include: [
      { 
        model: User, 
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  return {
    status: 'SUCCESSFUL',
    data: response,
  };
};

module.exports = {
  postGetAllService,
};