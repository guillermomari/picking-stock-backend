'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ContabilizationReports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      skuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      prev_qty: {
        type: Sequelize.INTEGER
      },
      act_qty: {
        type: Sequelize.INTEGER
      },
      last_contabilization: {
        type: Sequelize.DATE
      },
      operationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('ContabilizationReports');
  }
};