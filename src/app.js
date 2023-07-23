const express = require('express');
const login = require('./controllers/login.controller');
const user = require('./controllers/user.controller');
const category = require('./controllers/category.controller');
const post = require('./controllers/post.controller');
const validateNewUser = require('./middleware/validateNewUser');
const validateEmail = require('./middleware/validadeEmail');
const validateJwt = require('./middleware/validateJWT');
const validateUserById = require('./middleware/validadeUserById');
const validateCategoryName = require('./middleware/validateCategoryName');
const validatePost = require('./middleware/validatePostFields');
const validatePostById = require('./middleware/validatePostById');
const validateUpdatePost = require('./middleware/validateUpdatePost');
const validateDeletePost = require('./middleware/validateDeletePost');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', login);
app.post(
'/user', 
validateEmail, 
validateNewUser,
user.createUser,
);
app.get('/user', validateJwt, user.getAll);
app.get('/user/:id', validateJwt, validateUserById, user.getById);
app.delete('/user/me', validateJwt, user.deleteUser);
app.get('/categories', validateJwt, category.getAll);
app.post('/categories', validateCategoryName, validateJwt, category.createCategory);
app.get('/post/search', validateJwt, post.searchPost);
app.post('/post', validateJwt, validatePost, post.createPost);
app.get('/post', validateJwt, post.getAll);
app.delete('/post/:id', validateJwt, validateDeletePost, post.deletePost);
app.get('/post/:id', validateJwt, validatePostById, post.getById);
app.put('/post/:id', validateJwt, validateUpdatePost, post.updatePost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
