const Joi = require('joi');

const inventorySchema = Joi.object({
  skuId: Joi.number().integer().required(),
  warehouseId: Joi.number().integer().required(),
  positionId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(0)
});

module.exports = inventorySchema;
