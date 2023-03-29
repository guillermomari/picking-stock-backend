const Joi = require('joi');

const SKUValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number(),
  height: Joi.number().required(),
  width: Joi.number().required(),
  deep: Joi.number().required(),
  unit_volume: Joi.number().required(),
  unit_weight: Joi.number().required(),
  color: Joi.string(),
  size: Joi.string(),
  package_qty: Joi.number().integer().positive(),
  minimum_unit: Joi.number().integer().positive(),
  dangerous_manipulation: Joi.boolean(),
  temperature_control: Joi.boolean(),
  ean:Joi.string()
});

module.exports = SKUValidationSchema;
