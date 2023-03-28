'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('OrderDetails', {
      fields: ['orderId'],
      type: 'foreign key',
      name: 'fk_OrderDetails_Order',
      references: {
        table: 'Orders',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('OrderDetails', {
      fields: ['skuId'],
      type: 'foreign key',
      name: 'fk_OrderDetails_SKU',
      references: {
        table: 'SKUs',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('OrderDetails', {
      fields: ['assigned_to_operatorId'],
      type: 'foreign key',
      name: 'fk_OrderDetails_Operators',
      references: {
        table: 'Operators',
        field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('OrderDetails', 'fk_OrderDetails_Order');
    await queryInterface.removeConstraint('OrderDetails', 'fk_OrderDetails_SKU');
    await queryInterface.removeConstraint('OrderDetails', 'fk_OrderDetails_Operators');
  }
};
