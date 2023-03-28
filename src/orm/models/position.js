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
  Position.hasMany(Inventory, { foreignKey: 'positionId' });
  Position.associate = models => {
    Position.belongsTo(models.Warehouse, { foreignKey: 'warehouseId' });
  };
  return Position;
};