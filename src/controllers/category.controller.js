const { CategoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
    const { dataValues } = await CategoryService.createCategory({ name });
    return res.status(201).json(dataValues);
};

const getAll = async (req, res) => {
  const categories = await CategoryService.getAllCategories();
  res.status(200).json(categories);
};

module.exports = { createCategory, getAll };