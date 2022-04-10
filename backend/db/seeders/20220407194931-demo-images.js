'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Images', [
        {chairId:'1', url:'https://i.pinimg.com/564x/51/8f/ca/518fcaaf37615b54ebce418e25eed2b4.jpg', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'2', url:'https://www.controlbooth.com/attachments/14-seats-to-the-aisle-front-view-medium-jpg.16203/', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'3', url:'https://images.unsplash.com/photo-1560019789-80a78e25b64d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'4', url:'https://staticg.sportskeeda.com/editor/2018/11/b5a9d-15411667267282-800.jpg', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'5', url:'https://preview.redd.it/seszliasclz61.jpg?width=640&crop=smart&auto=webp&s=a90af3cd7569e588f9d60b6c447ee24178fe64c2', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'6', url:'https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/eames_lounge_chair_and_ottoman/mh_prd_ovw_eames_lounge_chair_and_ottoman.jpg.rendition.480.360.jpg', createdAt: new Date(), updatedAt: new Date() },
        {chairId:'7', url:'https://cdn.knorrweb.com/delta-children/800x800/c74fa1863793de50f06b3a615867898e.jpg', createdAt: new Date(), updatedAt: new Date() },

      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Images', null, {});
  }
};
