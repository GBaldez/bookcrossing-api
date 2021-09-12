const express = require('express');

const router = express.Router();

const apiController = require('../controllers/apiController');
const validateBody = require('../middlewares/BookMiddlewares');

router.get(`/books`, apiController.getAll);

router.get(`/books/:id`, apiController.getById);

router.get('/nearby', apiController.details);

router.post(`/books`, validateBody, apiController.create);

router.put(`/books/:id`, apiController.update);

router.delete(`/books/:id`, apiController.delete);

module.exports = router;