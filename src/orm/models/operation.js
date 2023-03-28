'use strict';
const {
  Model
} = require('sequelize');
const ContabilizationReport = require('./contabilization_report');
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Operation.init({
    type_of_operation_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    costumerId: DataTypes.INTEGER,
    warehouseId: DataTypes.INTEGER,
    skuId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Operation',
  });
  Operation.hasMany(ContabilizationReport, { foreignKey: 'operationId' });
  Operation.associate = models => {
    Operation.belongsTo(models.SKU, { foreignKey: 'skuId' });
    Operation.belongsTo(models.Warehouse, { foreignKey: 'warehouseId' })
    Operation.belongsTo(models.Costumer, { foreignKey: 'costumerId' })
    Operation.belongsTo(models.Status, { foreignKey: 'statusId' })
    Operation.belongsTo(models.TypeOfOperations, { foreignKey: 'type_of_operation_id' })
  };
  return Operation;
};