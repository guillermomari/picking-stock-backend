const express = require('express');
const orderDetailController = require('../controllers/sku.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const orderDetailValidationSchema =  require('../orm/schemas/orderdetail.schema');


const router = express.Router();

router.get('/', orderDetailController.getAllSKUsController);
router.get('/:id', orderDetailController.getSKUByIdController);
router.post('/', endpointsDataValidator(orderDetailValidationSchema), orderDetailController.createSKUController);
router.put('/:id', orderDetailController.updateSKUController);
router.delete('/:id', orderDetailController.deleteSKUController);

module.exports = router;
