const express = require('express');
const multer = require('multer')
const multerConfig = require('./config/multer')
const PostController = require('./controller/PostContoller');
const routes = express.Router();

const uploads = multer(multerConfig)

routes.get('/photos', PostController.index);
routes.get('/photos/:id', PostController.show);


routes.post('/photos',uploads.single('avatar') ,PostController.create);
routes.delete('/photos/:id',PostController.destroy);


module.exports = routes;
