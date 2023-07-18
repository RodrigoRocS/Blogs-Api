const { Category } = require('../models');

const createCategory = ({ name }) => Category.create({ name });

const getAllCategories = () => Category.findAll();

const getById = (id) => Category.findByPk(id);

const findAndCountAll = async (ids) => {
  const { count } = await Category.findAndCountAll({
    where: {
      id: ids,
    },
  });
  return count;
};

module.exports = { getAllCategories, createCategory, getById, findAndCountAll };