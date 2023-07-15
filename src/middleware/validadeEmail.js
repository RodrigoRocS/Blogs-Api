const { UserService } = require('../services');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  
  const user = await UserService.getByEmail(email);

  if (user) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  
  next();
};

module.exports = validateEmail;