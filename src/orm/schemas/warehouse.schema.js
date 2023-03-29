const Joi = require('joi');

const WarehouseValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  address: Joi.string().required(),
  height: Joi.number(),
  width: Joi.number(),
  deep: Joi.number()
});

module.exports = WarehouseValidationSchema;
