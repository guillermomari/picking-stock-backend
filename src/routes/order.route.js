const express = require('express');
const orderController = require('../controllers/order.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const orderValidationSchema =  require('../orm/schemas/order.schema');


const router = express.Router();

router.get('/', orderController.getAllOrdersController);
router.get('/:id', orderController.getOrderByIdController);
router.post('/', endpointsDataValidator(orderValidationSchema), orderController.createOrderController);
router.put('/:id', orderController.updateOrderController);
router.delete('/:id', orderController.deleteOrderController);

module.exports = router;
