const { PostService } = require('../services');

const validateUpdatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.payload.data.id;

  if (!title || !content) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  const { userId: postUserId } = await PostService.getById(id);

  if (userId !== postUserId) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  }
  
  next();
};

module.exports = validateUpdatePost;