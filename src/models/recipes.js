module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define("recipes", {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [0, 100],
      },
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [0, 50],
      },
    },
    ingredients:  {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    prepTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {});
  recipes.associate = function(models) {

  };
  return recipes;
};
