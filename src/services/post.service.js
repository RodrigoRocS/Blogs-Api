const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = ({
   title, content, userId }) => BlogPost.create({ title, content, userId });

const createCategory = async (id, categoryIds) => {
   const posts = categoryIds.map((e) => ({ postId: id, categoryId: e }));
   await PostCategory.bulkCreate(posts);
};

const getAll = () => BlogPost.findAll({
   include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
   ],
});

module.exports = { createPost, createCategory, getAll };