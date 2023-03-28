'use strict';
const {
  Model
} = require('sequelize');
const Inventory = require('./inventory');

module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Position.belongsTo(models.Warehouse, { foreignKey: 'warehouseId' });
      Position.hasMany(models.Inventory, { foreignKey: 'positionId' });
    }
  }
  Position.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    warehouseId: DataTypes.INTEGER,
    max_weight: DataTypes.FLOAT,
    volume_capacity: DataTypes.FLOAT,
    notes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Position',
  });

 
  return Position;
};