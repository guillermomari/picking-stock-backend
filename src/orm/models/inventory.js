'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventory.init({
    skuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SKUs',
        key: 'id'
      }
    },
    warehouseId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Warehouses',
        key: 'id'
      }
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Positions',
        key: 'id'
      }
    },
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  Inventory.associate = models => {
    Inventory.belongsTo(models.SKU, { foreignKey: 'skuId' });
    Inventory.belongsTo(models.Warehouse, { foreignKey: 'warehouseId' })
    Inventory.belongsTo(models.Position, { foreignKey: 'positionId' })
  }
  return Inventory;
};