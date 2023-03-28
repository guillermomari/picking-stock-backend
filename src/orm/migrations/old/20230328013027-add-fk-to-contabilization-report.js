'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('ContabilizationReports', 'skuId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'SKUs',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    await queryInterface.addColumn('ContabilizationReports', 'operationId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Operations',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('ContabilizationReports', 'skuId');
    await queryInterface.removeColumn('ContabilizationReports', 'operationId');
  }
};
