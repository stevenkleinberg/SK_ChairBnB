'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Chairs', [
      {userId:'1', address:'69420 West Parker Ave', city:'Chicago', state:'Illinois', country:'United States', name:'Ol reliable', description:'A beautiful recling armchair with cupholders, comfort beyond imagination! ', price:'150', createdAt: new Date(), updatedAt: new Date()},
      {userId:'2', address:'888 broadway', city:'Chicago', state:'Illinois', country:'United States',name:'Showtime!', description:'Theatre seats. No play going on. Obstructed view.', price:'40', createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', address:'4547 chair st', city:'Chicago', state:'Illinois', country:'United States', name:'El Trono',description:'This 15th century spanish throne is decadent as can be. Made from the most uncomfortable and gaudy matirials imaginable. Feel the royalty in your buns.', price:'500', createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', address:'1000 keister way', city:'Chicago', state:'Illinois', country:'United States',name:'Chair will be blood', description:'This is a folding chair at wrestlemania. Sit on it, use it as a weapon I dont care!!!!!', price:'200', createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', address:'2920 Altgeled unit #2', city:'Chicago', state:'Illinois', country:'United States',name:'Frog Toilet', description:'I musta aten somethin fierce! Gosh Darn frogs im my toilet! instead of flushin i figured id make it an attraction! Hustle Grindset!', price:'45', createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', address:'353 Groody lane', city:'Chicago', state:'Illinois', country:'United States',name:'1960 Eamss Original', description:'The Eameses really changed the way that people considered what a chair is supposed to look like says Amy Auscherman, Herman Millers head of archives and brand heritage. And while details like its upholstered cushions signal inspiration from earlier, more traditional furniture designs, features like the molded plywood and shock mount technology made the chair revolutionary at the time. The point is, ever since the set debuted with Herman Miller in 1956, it has been a staple of modern design—and theres a very good reason why, 65 years after the original Eames lounger debuted at the Arlene Francis Home show, were still talking about it', price:'100', createdAt: new Date(), updatedAt: new Date()},
      {userId:'1', address:'124 Conch Street ', city:'Bikini Bottom ', state:'Hawaii', country:'United States',name:'SpongeBob', description:'Are you ready, kids? Aye, aye, captain! I cant hear you! Aye, aye, captain! Oooooooooohhhh... Who lives in a pineapple under the sea? SpongeBob SquarePants! Absorbent and yellow and porous is he. SpongeBob SquarePants! If nautical nonsense, be something you wish. SpongeBob SquarePants! Then drop on the deck and flop like a fish! SpongeBob SquarePants! Ready? SpongeBob SquarePants!SpongeBob SquarePants! SpongeBob SquarePants! SpongeBob SquarePaaaaaaants!Ah, ha ha, hahahahahahahahaha!', price:'1000', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Chairs', null, {});

  }
};
