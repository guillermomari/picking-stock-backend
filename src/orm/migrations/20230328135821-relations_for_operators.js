'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Operations', {
      fields: ['skuId'],
      type: 'foreign key',
      name: 'fk_Operations_SKU_1', // nombre de restricción único
      references: {
        table: 'SKUs',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Operations', {
      fields: ['warehouseId'],
      type: 'foreign key',
      name: 'fk_Operations_Warehouse_1', // nombre de restricción único
      references: {
        table: 'Warehouses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Operations', {
      fields: ['costumerId'],
      type: 'foreign key',
      name: 'fk_Operations_Customer_1', // nombre de restricción único
      references: {
        table: 'Customers',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Operations', {
      fields: ['statusId'],
      type: 'foreign key',
      name: 'fk_Operations_Status_1', // nombre de restricción único
      references: {
        table: 'Statuses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Operations', {
      fields: ['type_of_operation_id'],
      type: 'foreign key',
      name: 'fk_Operations_TypeOfOperation_1', // nombre de restricción único
      references: {
        table: 'TypeOfOperations',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Operations', 'fk_Operations_SKU_1');
    await queryInterface.removeConstraint('Operations', 'fk_Operations_Warehouse_1');
    await queryInterface.removeConstraint('Operations', 'fk_Operations_Customer_1');
    await queryInterface.removeConstraint('Operations', 'fk_Operations_Status_1');
    await queryInterface.removeConstraint('Operations', 'fk_Operations_TypeOfOperation_1');
  }
};
