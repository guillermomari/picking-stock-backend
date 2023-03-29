const Joi = require('joi');

const TypeOfOperationsValidationSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

module.exports = TypeOfOperationsValidationSchema;
