const Joi = require('joi');

const ContabilizationReportSchema = Joi.object({
  skuId: Joi.number().integer().required(),
  prev_qty: Joi.number().integer(),
  act_qty: Joi.number().integer(),
  last_contabilization: Joi.date(),
  operationId: Joi.number().integer().required(),
});

module.exports = ContabilizationReportSchema;
