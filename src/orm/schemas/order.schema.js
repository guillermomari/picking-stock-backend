const Joi = require('joi');

const orderSchema = Joi.object({
  customerId: Joi.number().integer().positive().required(),
  statusId: Joi.number().integer().positive().required(),
  created_by_operatorId: Joi.number().integer().positive().required(),
  assigned_to_operatorId: Joi.number().integer().positive().required(),
});

module.exports = orderSchema;
