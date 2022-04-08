'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [
      {userId:'1', chairId:'3', sitDate:'2022-04-08', standDate:'2022-04-09',createdAt: new Date(), updatedAt: new Date()},
      {userId:'2', chairId:'2', sitDate:'2022-04-08', standDate:'2022-04-09',createdAt: new Date(), updatedAt: new Date()},
      {userId:'3', chairId:'1', sitDate:'2022-04-08', standDate:'2022-04-09',createdAt: new Date(), updatedAt: new Date()},

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
