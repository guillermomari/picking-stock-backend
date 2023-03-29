const Joi = require('joi');

const operationSchema = Joi.object({
  type_of_operation_id: Joi.number().integer().required(),
  code: Joi.string().required(),
  statusId: Joi.number().integer().required(),
  costumerId: Joi.number().integer().required(),
  warehouseId: Joi.number().integer().required(),
  skuId: Joi.number().integer().required(),
  quantity: Joi.number().integer().required(),
});

module.exports = operationSchema;
