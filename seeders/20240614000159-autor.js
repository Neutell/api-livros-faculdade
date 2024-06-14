'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('autores', [
      {
        name: 'Machado de Assis',
        age: 69,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Augusto cury ',
        age: 65,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: ' Sthepen hawking ',
        age: 76,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('autores', null, {});
  }
};
