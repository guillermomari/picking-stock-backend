const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const fieldsValidatorMiddleware = require('../utils/endpointsDataValidator');

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', fieldsValidatorMiddleware, customerController.createCustomer);
router.put('/:id', fieldsValidatorMiddleware, customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
