const Joi = require('joi');

const operatorsSchema = Joi.object({
  name: Joi.string().required(),
  roleId: Joi.number().integer().required(),
  username: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = operatorsSchema;
