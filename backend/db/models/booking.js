'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId:  {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Users"}
    },
    chairId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: "Chairs"}
    },
    sitDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    standDate: {
     type: DataTypes.DATE,
      allowNull: false
    },
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, {
      foreighnKey: 'userId'
    });
    Booking.belongsTo(models.Chair, {
      foreighnKey: 'chairId'
    })
  };
  return Booking;
};
