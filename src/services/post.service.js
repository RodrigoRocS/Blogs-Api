const { BlogPost, PostCategory } = require('../models');

const createPost = ({
   title, content, userId }) => BlogPost.create({ title, content, userId });

const createCategory = async (id, categoryIds) => {
   const posts = categoryIds.map((e) => ({ postId: id, categoryId: e }));
   await PostCategory.bulkCreate(posts);
};

module.exports = { createPost, createCategory };