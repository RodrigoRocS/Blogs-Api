const { PostService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
    const { dataValues } = await PostService.createPost({ title, content, categoryIds });
    return res.status(201).json(dataValues);
};

module.exports = { createPost };