const { postService } = require('../services');

const postGetAllController = async (req, res) => {
  const response = await postService.postGetAllService();

  if (response.status !== 'SUCCESSFUL') {
    return res.status(400).json(response.data);
  }

  return res.status(200).json(response.data);
};

module.exports = {
  postGetAllController,
};