const { UserService } = require('../services');

const validateUserById = async (req, res, next) => {
  const { id } = req.params;
  
  const user = await UserService.getById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }
  
  next();
};

module.exports = validateUserById;