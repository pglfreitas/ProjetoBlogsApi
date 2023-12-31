const { categoryService } = require('../services');

const categoryCreateController = async (req, res) => {
  const { name } = req.body;

  const response = await categoryService.categoryCreateService(name);

  if (response.status !== 'SUCCESSFUL') {
    return res.status(400).json(response.data);
  }

  return res.status(201).json(response.data);
};

const categoryGetAllController = async (req, res) => {
  const response = await categoryService.categoryGetAllService();

  return res.status(200).json(response.data);
};

module.exports = {
  categoryCreateController,
  categoryGetAllController,
};