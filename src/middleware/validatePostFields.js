const { CategoryService } = require('../services');

const validatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  
  if (!title || !content || !categoryIds) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  const validateIds = await CategoryService.findAndCountAll(categoryIds);
  
  if (categoryIds.length !== validateIds) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }
  console.log('teste');
  
  next();
};

module.exports = validatePost;