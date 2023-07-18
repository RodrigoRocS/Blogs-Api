const { CategoryService } = require('../services');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  
  const validateIds = await CategoryService.findAndCountAll(categoryIds);
  
  if (!title && !content && !categoryIds) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  if (categoryIds.length === +validateIds) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }
  
  next();
};

module.exports = validatePost;