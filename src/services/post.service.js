const { BlogPost } = require('../models');

const createPost = ({
   title, content, categoryIds }) => BlogPost.create({ title, content, categoryIds });

module.exports = { createPost };