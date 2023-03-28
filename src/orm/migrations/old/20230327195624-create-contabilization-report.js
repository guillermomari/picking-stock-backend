'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContabilizationReports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      costumerId: {
        type: Sequelize.INTEGER
      },
      skuId: {
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contabilization_reports');
  }
};