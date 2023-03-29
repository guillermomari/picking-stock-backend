const Joi = require('joi');

const rolesSchema = Joi.object({
  modules_authorized: Joi.array().items(Joi.string().required()).required(),
  description: Joi.string().required()
});

module.exports = rolesSchema;
