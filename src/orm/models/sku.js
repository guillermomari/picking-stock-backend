'use strict';
const {
  Model
} = require('sequelize');
const Inventory = require('./inventory');
const ContabilizationReport = require('./contabilization_report');
const Operation = require('./operation');
const OrderDetail = require('./orderdetail');
module.exports = (sequelize, DataTypes) => {
  class SKU extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SKU.hasMany(models.ContabilizationReport, { foreignKey: 'skuId' });
      SKU.hasMany(models.Inventory, { foreignKey: 'skuId' });
      SKU.hasMany(models.Operation, { foreignKey: 'skuId' });
      SKU.hasMany(models.OrderDetail, { foreignKey: 'skuId' });
    }
  }
  SKU.init({
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    deep: DataTypes.FLOAT,
    unit_volume: DataTypes.FLOAT,
    unit_weight: DataTypes.FLOAT,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    package_qty: DataTypes.INTEGER,
    minimum_unit: DataTypes.INTEGER,
    dangerous_manipulation: DataTypes.BOOLEAN,
    temperature_control: DataTypes.BOOLEAN,
    ean:DataTypes.STRING

  }, {
    sequelize,
    modelName: 'SKU',
  });

  return SKU;
};