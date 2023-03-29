const Joi = require('joi');

const positionSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  warehouseId: Joi.number().integer().required(),
  max_weight: Joi.number(),
  volume_capacity: Joi.number(),
  notes: Joi.string(),
});

module.exports = positionSchema;
