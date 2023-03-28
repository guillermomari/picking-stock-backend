'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetail.init({
    orderId: DataTypes.INTEGER,
    skuId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    assigned_to_operatorId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  OrderDetail.associate = models => {
    OrderDetail.belongsTo(models.SKU, { foreignKey: 'skuId' });
    OrderDetail.belongsTo(models.Order, { foreignKey: 'orderId' });
    OrderDetail.belongsTo(models.Operators, { foreignKey: 'assigned_to_operatorId' });
  };
  return OrderDetail;
};