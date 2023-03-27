const express = require('express');
const skuController = require('../controllers/sku.controller');
const fieldsValidatorMiddleware = require('../utils/endpointsDataValidator');


const router = express.Router();

router.get('/', skuController.getAllSKUs);
router.get('/:id', skuController.getSKUById);
router.post('/', fieldsValidatorMiddleware, skuController.createSKU);
router.put('/:id',fieldsValidatorMiddleware, skuController.updateSKU);
router.delete('/:id', skuController.deleteSKU);

module.exports = router;
