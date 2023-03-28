'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContabilizationReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ContabilizationReport.belongsTo(models.SKU, { foreignKey: 'skuId' });
    ContabilizationReport.belongsTo(models.Operation, { foreignKey: 'operationId' })
    }
  }
  ContabilizationReport.init({
    skuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SKUs',
        key: 'id'
      }
    },
    prev_qty: DataTypes.INTEGER,
    act_qty: DataTypes.INTEGER,
    last_contabilization: DataTypes.DATE,
    operationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Operations',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'ContabilizationReport'
  });
  
  return ContabilizationReport;
};