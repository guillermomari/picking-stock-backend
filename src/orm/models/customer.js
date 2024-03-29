'use strict';
const {
  Model
} = require('sequelize');
const Operation = require('./operation');
const Order = require('./order');

module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Operation, { foreignKey: 'customerId' });
      Customer.hasMany(models.Order, { foreignKey: 'customerId' });
    }
  }
  Customer.init({
    businessName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
 
  return Customer;
};