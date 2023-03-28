'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Inventories', {
      type: 'foreign key',
      fields: ['skuId'],
      references: {
        table: 'SKUs',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Inventories', {
      type: 'foreign key',
      fields: ['warehouseId'],
      references: {
        table: 'Warehouses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Inventories', {
      type: 'foreign key',
      fields: ['positionId'],
      references: {
        table: 'Positions',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Inventories', 'Inventories_skuId_fkey');
    await queryInterface.removeConstraint('Inventories', 'Inventories_warehouseId_fkey');
    await queryInterface.removeConstraint('Inventories', 'Inventories_positionId_fkey');
  }
};
