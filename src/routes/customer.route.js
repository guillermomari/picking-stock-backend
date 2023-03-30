const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customer.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const customerValidationSchema =  require('../orm/schemas/customer.schema');

router.get('/', customerController.getAllCustomersController);
router.get('/:id', customerController.getCustomerByIdController);
router.post('/', endpointsDataValidator(customerValidationSchema), customerController.createCustomerController);
router.put('/:id',  customerController.updateCustomerController);
router.delete('/:id', customerController.deleteCustomerController);

module.exports = router;
