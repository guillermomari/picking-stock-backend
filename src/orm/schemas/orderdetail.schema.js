const Joi = require('joi');

const orderDetailSchema = Joi.object({
    orderId: Joi.number().integer().required(),
    skuId: Joi.number().integer().required(),
    quantity: Joi.number().integer().required(),
    notes: Joi.string().allow(null, ''),
    assigned_to_operatorId: Joi.number().integer().allow(null)
});

module.exports = orderDetailSchema;