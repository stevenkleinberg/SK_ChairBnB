'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Images', [
        {chairId:'1', url:'https://i.pinimg.com/564x/51/8f/ca/518fcaaf37615b54ebce418e25eed2b4.jpg', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'2', url:'https://www.controlbooth.com/attachments/14-seats-to-the-aisle-front-view-medium-jpg.16203/', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'3', url:'https://images.unsplash.com/photo-1560019789-80a78e25b64d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'4', url:'https://staticg.sportskeeda.com/editor/2018/11/b5a9d-15411667267282-800.jpg', createdAt: new Date(), updatedAt: new Date() },

      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});
  }
};
