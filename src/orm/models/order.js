'use strict';
const {
  Model
} = require('sequelize');
const OrderDetail = require('./orderdetail');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, { foreignKey: 'customerId' });
    Order.belongsTo(models.Status, { foreignKey: 'statusId' })
    Order.belongsTo(models.Operators, { foreignKey: 'created_by_operatorId' })
    Order.belongsTo(models.Operators, { foreignKey: 'assigned_to_operatorId' })
    Order.hasMany(models.OrderDetail, { foreignKey: 'orderId' });
    }
  }
  Order.init({
    customerId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    created_by_operatorId: DataTypes.INTEGER,
    assigned_to_operatorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
 

  return Order;
};