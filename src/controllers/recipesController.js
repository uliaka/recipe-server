var express = require('express');
var recipesService = require ('../services/recipesService.js');
var router  = express.Router();

router.post('/', function(req, res, next) {
  recipesService.createRecipe(req.body)
  .then((user) => res.status(201).send(user))
  .catch((error) => next(error));
});

router.get('/', function(req, res, next) {
  recipesService.getRecipes()
  .then((data) => res.json({ data }))
  .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  recipesService.getRecipeById(req.params.id)
    .then((data) => res.json({ data }))
    .catch((error) => next(error));
});

router.put('/:id', (req, res, next) => {
  recipesService.updateRecipe(req.params.id, req.body)
    .then(() => res.status(201).send({ recipe: req.body }))
    .catch((error) => next(error));
});

router.delete('/:id', (req, res, next) => {
  recipesService.deleteRecipe(req.params.id)
    .then(() => res.status(204).end())
    .catch((error) => next(error));
});
module.exports = router;