'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ContabilizationReports', {
      fields: ['skuId'],
      type: 'foreign key',
      name: 'ContabilizationReports_SKUs_fk',
      references: {
        table: 'SKUs',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('ContabilizationReports', {
      fields: ['operationId'],
      type: 'foreign key',
      name: 'ContabilizationReports_Operations_fk',
      references: {
        table: 'Operations',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('ContabilizationReports', 'ContabilizationReports_SKUs_fk');
    await queryInterface.removeConstraint('ContabilizationReports', 'ContabilizationReports_Operations_fk');
  }
};
