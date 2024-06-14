'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('livros', [
      {
        name: 'Dom casmurro',
        year: 1899,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'O homem mais inteligente da historia ',
        year: 2016,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: ' Uma breve historia sobre o tempo ',
        year: 1988,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('livros', null, {});
  }
};
