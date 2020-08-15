const express = require('express');
const routes = express.Router();

const PostController = require('./controller/PostContoller');

routes.get('/photos', PostController.index);
routes.post('/photos', PostController.create);

module.exports = routes;