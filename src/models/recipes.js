'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define("recipes", {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [0, 100],
      },
    },
    ingredients:  {
      type: DataTypes.TEXT(5120),
      allowNull: false,
      validate: {
        len: [0, 5120],
      },
    },
    description: {
      type: DataTypes.TEXT(5120),
      allowNull: false,
      validate: {
        len: [0, 5120],
      },
    },
    prepTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {});
  recipes.associate = function(models) {
    // associations can be defined here
  };
  return recipes;
};