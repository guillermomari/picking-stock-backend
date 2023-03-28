'use strict';
const {
  Model
} = require('sequelize');
const Operation = require('./operation');
const Order = require('./order');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Status.hasMany(models.Operation, { foreignKey: 'statusId' });
      Status.hasMany(models.Order, { foreignKey: 'statusId' });
    }
  }
  Status.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
  });

  return Status;
};