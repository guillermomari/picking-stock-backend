'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Costumers',
          key: 'id'
        }
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Status',
          key: 'id'
        }
      },
      created_by_operatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Operators',
          key: 'id'
        }
      },
      assigned_to_operatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Operators',
          key: 'id'
        }
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

    await queryInterface.addConstraint('Orders', {
      fields: ['customerId'],
      type: 'foreign key',
      name: 'fk_Orders_Customer',
      references: { 
        table: 'Costumers',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Orders', {
      fields: ['statusId'],
      type: 'foreign key',
      name: 'fk_Orders_Status',
      references: { 
        table: 'Status',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('Orders', {
      fields: ['created_by_operatorId'],
      type: 'foreign key',
      name: 'fk_Orders_Operators_created_by',
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
      name: 'fk_Orders_Operators_assigned_to',
      references: { 
        table: 'Operators',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
