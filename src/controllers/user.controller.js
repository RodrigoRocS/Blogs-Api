const { UserService } = require('../services');
const { createToken } = require('../auth/authtentication');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
  
    await UserService.createUser({ displayName, email, password, image });
  
    const user = await UserService.getByEmail(email);
    console.log(user);
    const { password: _password, ...userWithoutPassword } = user.dataValues;
    const payload = { data: userWithoutPassword };
    const token = createToken(payload);
  
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

const getAll = async (_req, res) => {
  const users = await UserService.getAllUsers();
  const usersWithoutPassword = users.map((user) => {
    const { password, ...dataValuesWithoutPassword } = user.dataValues;
    return dataValuesWithoutPassword;
  });
  console.log(usersWithoutPassword);
  res.status(200).json(usersWithoutPassword);
};

module.exports = { createUser, getAll };