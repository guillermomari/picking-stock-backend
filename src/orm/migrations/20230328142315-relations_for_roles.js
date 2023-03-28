'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Operators', {
      fields: ['roleId'],
      type: 'foreign key',
      name: 'fk_Operators_Roles',
      references: {
        table: 'Roles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Operators', 'fk_Operators_Roles');
  }
};

