var models  = require('../models/index.js');

const recipeModel = models.recipes;

const createRecipe = (recipe) => recipeModel.create(recipe); 

const getRecipes = () => recipeModel.findAll();

const getRecipeById = (id) => recipeModel.findAll({
    where: { id },
  });

const updateRecipe = (id, recipe) => recipeModel.update(
  recipe,
{
    where: { id }
}
);

const deleteRecipe = (id) => recipeModel.destroy({
    where: { id },
  });

module.exports = { 
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe
}
