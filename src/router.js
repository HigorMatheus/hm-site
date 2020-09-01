const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const PostController = require('./controller/PostContoller');
const UserController = require('./controller/userController');
const routes = express.Router();
const auth = require('./Middleware/auth');


routes.get('/post', auth, PostController.index);
routes.get('/post/:id', auth, PostController.show);
routes.post('/user/:id/post', auth, multer( multerConfig).single('imagem') ,PostController.create);
routes.delete('/user/:id/post/:id', auth, PostController.destroy);


routes.post('/user', UserController.create);
routes.post('/login', UserController.auth);
routes.get('/user',auth, UserController.index);
routes.get('/user/:ID',auth, UserController.show);
routes.put('/user/:ID', auth,UserController.update);
routes.delete('/user/:ID',auth, UserController.destroy);

module.exports = routes;