'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Inventories', {
      fields: ['warehouseId'],
      type: 'foreign key',
      name: 'Inventories_Warehouses_fk',
      references: {
        table: 'Warehouses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Operations', {
      fields: ['warehouseId'],
      type: 'foreign key',
      name: 'Operations_Warehouses_fk',
      references: {
        table: 'Warehouses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Positions', {
      fields: ['warehouseId'],
      type: 'foreign key',
      name: 'Positions_Warehouses_fk',
      references: {
        table: 'Warehouses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Inventories', 'Inventories_Warehouses_fk');
    await queryInterface.removeConstraint('Operations', 'Operations_Warehouses_fk');
    await queryInterface.removeConstraint('Positions', 'Positions_Warehouses_fk');
  }
};
