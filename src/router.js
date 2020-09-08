const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const PostController = require('./controller/PostContoller');
const UserController = require('./controller/userController');
const routes = express.Router();
const auth = require('./Middleware/auth');


routes.get('/post',  PostController.index);
routes.get('/post/:id',  PostController.show);
routes.post('/user/post', auth, multer( multerConfig).single('imagem') ,PostController.create);
routes.delete('/user/post/:id',auth , PostController.destroy);


routes.post('/user', UserController.create);
routes.post('/login', UserController.auth);
routes.get('/user',  UserController.index);
routes.get('/user/show', auth, UserController.show);
routes.put('/user', auth, UserController.update);
routes.delete('/user', auth, UserController.destroy);

module.exports = routes;