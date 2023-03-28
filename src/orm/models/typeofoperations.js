'use strict';
const {
  Model
} = require('sequelize');
const Operation =  require('./operation');
module.exports = (sequelize, DataTypes) => {
  class TypeOfOperations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TypeOfOperations.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeOfOperations',
  });
  TypeOfOperations.hasMany(Operation, { foreignKey: 'type_of_operation_id' });
  return TypeOfOperations;
};