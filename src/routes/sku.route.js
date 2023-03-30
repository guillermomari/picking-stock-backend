const express = require('express');
const skuController = require('../controllers/sku.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const SKUValidationSchema =  require('../orm/schemas/skus.schema');


const router = express.Router();

router.get('/', skuController.getAllSKUsController);
router.get('/:id', skuController.getSKUByIdController);
router.post('/', endpointsDataValidator(SKUValidationSchema), skuController.createSKUController);
router.put('/:id', skuController.updateSKUController);
router.delete('/:id', skuController.deleteSKUController);

module.exports = router;
