const { getPayload } = require('../auth/authtentication');

const validateJwt = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        message: 'Token not found',
      });
    }
  
    const payload = getPayload(authorization);
    req.payload = payload;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Erro ao acessar o endpoint',
      error: 'É necessário um token válido para acessar esse endpoint',
    });
  }
};

module.exports = validateJwt;