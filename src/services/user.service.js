const { User } = require('../models');

const createUser = ({ displayName,
   email, password, image }) => User.create({ displayName, email, password, image });

const getAllUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

const getByEmail = (email) => User.findOne({ where: { email } });

const getById = (id) => User.findByPk(id);

module.exports = {
  createUser,
  getAllUsers,
  getByEmail,
  getById,
};