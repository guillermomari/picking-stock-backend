'use strict';
const {
  Model
} = require('sequelize');
const Order = require('./order');
const OrderDetail = require('./orderdetail');
module.exports = (sequelize, DataTypes) => {
  class Operators extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Operators.init({
    name: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Operators',
  });
  Operators.hasMany(Order, { foreignKey: 'created_by_operatorId' });
  Operators.hasMany(Order, { foreignKey: 'assigned_to_operatorId' });
  Operators.hasMany(OrderDetail, { foreignKey: 'assigned_to_operatorId' });
  Operators.associate = models => {
    Operators.belongsTo(models.Roles, { foreignKey: 'roleId' });}
  return Operators;
};
