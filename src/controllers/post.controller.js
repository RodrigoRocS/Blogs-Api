const { PostService } = require('../services');

const errormsg = 'Erro interno';

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.payload.data.id;
    console.log(req.payload);
      const { dataValues } = await PostService.createPost({ title, content, userId });
      const { id } = dataValues;
      await PostService.createCategory(id, categoryIds);
      return res.status(201).json(dataValues);
  } catch (error) {
    return res.status(500).json({ message: errormsg, error: error.message });
}
};

const getAll = async (req, res) => {
  try {
      const data = await PostService.getAll();
      return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: errormsg, error: error.message });
}
};

const getById = async (req, res) => {
  try {
      const { id } = req.params;
      const data = await PostService.getById(id);
      return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: errormsg, error: error.message });
}
};

const updatePost = async (req, res) => {
  try {
      const { id } = req.params;
      const { title, content } = req.body;
      await PostService.updatePost(id, title, content);
      const data = await PostService.getById(id);
      return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: errormsg, error: error.message });
}
};

const deletePost = async (req, res) => {
  try {
      const { id } = req.params;
      await PostService.deletePost(id);
      return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: errormsg, error: error.message });
}
};

const searchPost = async (req, res) => {
  try {
      const { q } = req.query;
      const data = await PostService.searchPost(q);
      return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: errormsg, error: error.message });
}
};

module.exports = { createPost, getAll, getById, updatePost, deletePost, searchPost };