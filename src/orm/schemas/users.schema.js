const Joi = require('joi');

const UsersValidationSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  token: Joi.string(),
  refresh_token: Joi.string(),
  roleId: Joi.number().integer().required()
});

module.exports = UsersValidationSchema;
