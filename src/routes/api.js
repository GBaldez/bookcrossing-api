const express = require('express');

const router = express.Router();

const apiController = require('../controllers/apiController');
const validateBody = require('../middlewares/BookMiddlewares');

router.get(`/books`, apiController.getAll);

router.get(`/books/:id`, apiController.getById);

router.get(`/create`, apiController.create);

router.get('/nearby', apiController.details);

router.get(`/books-search`, apiController.filterAll);

router.post(`/books`, validateBody, apiController.create);

router.put(`/books/:id`, apiController.update);

router.delete(`/books/:id`, apiController.delete);

module.exports = router;