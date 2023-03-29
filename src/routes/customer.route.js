const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const customerValidationSchema =  require('../orm/schemas/customer.schema');

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', endpointsDataValidator(customerValidationSchema), customerController.createCustomer);
router.put('/:id',  customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
