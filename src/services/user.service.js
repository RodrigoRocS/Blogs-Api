const { User } = require('../models');

const createUser = ({ email, password }) => User.create({ email, password });

const getAllUsers = () => User.findAll();

const getByEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => User.findByPk(id);

module.exports = {
  createUser,
  getAllUsers,
  getByEmail,
  getByUserId,
};