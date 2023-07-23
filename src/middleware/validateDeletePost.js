const { PostService } = require('../services');

const validateDeletePost = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.payload.data.id;

  const data = await PostService.getById(id);

  if (!data) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }

  if (userId !== data.userId) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  }
  
  next();
};

module.exports = validateDeletePost;