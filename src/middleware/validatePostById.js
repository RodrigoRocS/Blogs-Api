const { PostService } = require('../services');

const validatePostById = async (req, res, next) => {
  const { id } = req.params;
  
  const post = await PostService.getById(id);

  if (!post) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }
  
  next();
};

module.exports = validatePostById;