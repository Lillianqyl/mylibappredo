const express = require('express');

const listRouter = express.Router();

const listController = require('../controllers/listController.js');

listRouter.get('/', (req, res) => listController.getSortDish(req, res));

module.exports = listRouter;