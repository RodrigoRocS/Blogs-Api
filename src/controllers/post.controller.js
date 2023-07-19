const { PostService } = require('../services');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.payload.data.id;
    console.log(req.payload);
      const { dataValues } = await PostService.createPost({ title, content, userId });
      console.log(dataValues);
      const { id } = dataValues;
      await PostService.createCategory(id, categoryIds);
      return res.status(201).json(dataValues);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error: error.message });
}
};

module.exports = { createPost };