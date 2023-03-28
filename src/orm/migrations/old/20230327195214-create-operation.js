'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Operations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeid: {
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      statusid: {
        type: Sequelize.INTEGER
      },
      costumerId: {
        type: Sequelize.INTEGER
      },
      warehouseId: {
        type: Sequelize.INTEGER
      },
      skuId: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      registry_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Operations');
  }
};