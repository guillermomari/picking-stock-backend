'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Orders', {
      fields: ['customerId'],
      type: 'foreign key',
      name: 'customer_fk_TBOrders_1',
      references: {
        table: 'Customers',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Orders', {
      fields: ['statusId'],
      type: 'foreign key',
      name: 'status_fk_TBOrders_1',
      references: {
        table: 'Statuses',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Orders', {
      fields: ['created_by_operatorId'],
      type: 'foreign key',
      name: 'created_by_operator_fk_TBOrders_1',
      references: {
        table: 'Operators',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Orders', {
      fields: ['assigned_to_operatorId'],
      type: 'foreign key',
      name: 'assigned_to_operator_fk_TBOrders_1',
      references: {
        table: 'Operators',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('OrderDetails', {
      fields: ['orderId'],
      type: 'foreign key',
      name: 'order_fk_TBOrders_forOD_1',
      references: {
        table: 'Orders',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('OrderDetails', {
      fields: ['assigned_to_operatorId'],
      type: 'foreign key',
      name: 'assigned_to_operator_fk_TBOrders_forOD_1',
      references: {
        table: 'Operators',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Orders', 'customer_fk_forOrders_TBOrders_1');
    await queryInterface.removeConstraint('Orders', 'status_fk__TBOrders_1');
    await queryInterface.removeConstraint('Orders', 'created_by_operator_fk_TBOrders_1');
    await queryInterface.removeConstraint('Orders', 'assigned_to_operator_fk_TBOrders_1');
    await queryInterface.removeConstraint('OrderDetails','order_fk_TBOrders_forOD_1');
    await queryInterface.removeConstraint('OrderDetails','assigned_to_operator_fk_TBOrders_forOD_1');
  }}
