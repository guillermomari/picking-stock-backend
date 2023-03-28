'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Operators', {
  id: {
  allowNull: false,
  autoIncrement: true,
  primaryKey: true,
  type: Sequelize.INTEGER
  },
  name: {
  type: Sequelize.STRING,
  allowNull: false
  },
  roleId: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
  model: 'Roles',
  key: 'id'
  }
  },
  username: {
  type: Sequelize.STRING,
  allowNull: false
  },
  password: {
  type: Sequelize.STRING,
  allowNull: false
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
await queryInterface.dropTable('Operators');
}
};