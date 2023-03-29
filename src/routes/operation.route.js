const express = require('express');
const skuController = require('../controllers/sku.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const operationValidationSchema =  require('../orm/schemas/operation.schema');


const router = express.Router();

router.get('/', skuController.getAllSKUs);
router.get('/:id', skuController.getSKUById);
router.post('/', endpointsDataValidator(operationValidationSchema), skuController.createSKU);
router.put('/:id', skuController.updateSKU);
router.delete('/:id', skuController.deleteSKU);

module.exports = router;
