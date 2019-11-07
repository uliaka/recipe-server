var express = require('express');
var recipes = require('../controllers/recipesController.js')
var router  = express.Router();

router.use('/recipes', recipes);

module.exports = router;
