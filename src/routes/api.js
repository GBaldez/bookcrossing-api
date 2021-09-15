const express = require('express');

const router = express.Router();

const apiController = require('../controllers/apiController');
const validateBody = require('../middlewares/BookMiddlewares');
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/User');
const sessionController = require('../controllers/sessionController');

const { verifyToken } = require('../middlewares/User')

router.get(`/books`, apiController.getAll);

router.get(`/books/:id`, apiController.getById);

router.get(`/create`, apiController.create);

router.get('/nearby', apiController.details);

router.get(`/books-search`, apiController.filterAll);

router.post(`/signup`, validateUser.validateIfUserExists, userController.createUser);

router.post(`/login`, sessionController.create);

router.post(`/books`, validateBody, apiController.create);

router.put(`/books/:id`, apiController.update);

router.delete(`/books/:id`, apiController.delete);

router.delete(`/users/:id`, verifyToken, userController.deleteUser);

module.exports = router;