'use strict';
const {
  Model
} = require('sequelize');
const Operation = require('./operation')
const Inventory= require('./inventory')
const Position= require('./position')
module.exports = (sequelize, DataTypes) => {
  class Warehouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Warehouse.hasMany(models.Inventory, { foreignKey: 'warehouseId' });
      Warehouse.hasMany(models.Operation, { foreignKey: 'warehouseId' });
      Warehouse.hasMany(models.Position, { foreignKey: 'warehouseId' });
    }
  }
  Warehouse.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    height: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    deep:DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Warehouse',
  });
 
  return Warehouse;
};