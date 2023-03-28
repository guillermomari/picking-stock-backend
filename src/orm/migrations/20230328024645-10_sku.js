'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SKUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.FLOAT
      },
      height: {
        type: Sequelize.FLOAT
      },
      width: {
        type: Sequelize.FLOAT
      },
      deep: {
        type: Sequelize.FLOAT
      },
      unit_volume: {
        type: Sequelize.FLOAT
      },
      unit_weight: {
        type: Sequelize.FLOAT
      },
      color: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      package_qty: {
        type: Sequelize.INTEGER
      },
      minimum_unit: {
        type: Sequelize.INTEGER
      },
      dangerous_manipulation: {
        type: Sequelize.BOOLEAN
      },
      temperature_control: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('SKUs');
  }
};