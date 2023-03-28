'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Operations', {
      fields: ['type_of_operation_id'],
      type: 'foreign key',
      name: 'Operations_TypeOfOperations_fk',
      references: {
        table: 'TypeOfOperations',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Operations', 'Operations_TypeOfOperations_fk');
  }
};
