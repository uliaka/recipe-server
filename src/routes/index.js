var express = require('express');
var recipes = require('../controllers/recipesController.js')
var router  = express.Router();

router.use('/recipes', recipes);
router.use(function(error, req, res, next) {
    res.status(500).send({ error: error.message });
});

module.exports = router;
