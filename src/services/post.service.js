const { Op } = require('sequelize');
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

const getById = (id) => BlogPost.findOne({
   where: { id },
   include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
   ],
});

const updatePost = (id, title, content) => BlogPost.update(
   { title, content },
   { where: { id } },
);

const deletePost = async (id) => {
  const removed = await BlogPost.destroy({ where: { id } });
  return removed;
};

const searchPost = async (q) => {
   const posts = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${q}%` } },
          { content: { [Op.like]: `%${q}%` } },
        ],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { 
          model: Category, 
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });
    return posts;
 };

module.exports = { 
createPost,
createCategory,
getAll,
getById,
updatePost,
deletePost,
searchPost };