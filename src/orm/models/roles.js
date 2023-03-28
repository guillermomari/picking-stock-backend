'use strict';
const {
  Model
} = require('sequelize');
const Operators = require('./operators');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Roles.hasMany(models.Operators, { foreignKey: 'roleId' });
    }
  }
  Roles.init({
    modules_authorized: DataTypes.JSON,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Roles',
  });
 
  return Roles;
};