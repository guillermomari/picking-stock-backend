const Joi = require('joi');

const customerSchema = Joi.object({
  businessName: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required()
});

module.exports = customerSchema;
