'use strict';
const {
  Model
} = require('sequelize');
const Inventory = require('./inventory');
const ContabilizationReport= require('./contabilization_report');
const Operation= require('./operation');
const OrderDetail= require('./orderdetail');
module.exports = (sequelize, DataTypes) => {
  class SKU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SKU.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    width:DataTypes.FLOAT,
    deep:DataTypes.FLOAT,
    unit_volume: DataTypes.FLOAT,
    unit_weight: DataTypes.FLOAT,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    package_qty: DataTypes.INTEGER,
    minimum_unit:DataTypes.INTEGER,
    dangerous_manipulation: DataTypes.BOOLEAN,
    temperature_control: DataTypes.BOOLEAN

  }, {
    sequelize,
    modelName: 'SKU',
  });
  SKU.hasMany(ContabilizationReport, { foreignKey: 'skuId' });
  SKU.hasMany(Inventory, { foreignKey: 'skuId' });
  SKU.hasMany(Operation, { foreignKey: 'skuId' });
  SKU.hasMany(OrderDetail, { foreignKey: 'skuId' });
  return SKU;
};