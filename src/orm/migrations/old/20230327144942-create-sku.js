'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SKUs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      height: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      width: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      deep:{
      allowNull: false,
      type: Sequelize.FLOAT
    },
      unit_volume: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
      unit_weight: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
      color: {
      allowNull: false,
      type: Sequelize.STRING
    },
      size: {
      allowNull: false,
      type: Sequelize.STRING
    },
      package_qty: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
      minimum_unit: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
      dangerous_manipulation: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
      temperature_control: {
      allowNull: false,
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
  async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('SKUs');
}
};