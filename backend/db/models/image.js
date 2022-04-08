'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    chairId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Chairs"}
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Chair, {
      foreignKey: 'chairId'
    })
  };
  return Image;
};
