'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Positions', {
      fields: ['warehouseId'],
      type: 'foreign key',
      name: 'fk_Positions_Warehouses_forPositions',
      references: {
        table: 'Warehouses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Positions', 'fk_Positions_Warehouses_forPositions');
  }
};
