'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      skuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'SKUs',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true
      },
      assigned_to_operatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Operators',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('OrderDetails');
  }
};
