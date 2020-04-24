const express = require('express');

const recommendationsRouter = express.Router();

const recommendationsController = require('../controllers/recommendationsController.js');

recommendationsRouter.get('/', (req, res) => recommendationsController.getRecommendations(req, res));

module.exports = recommendationsRouter;