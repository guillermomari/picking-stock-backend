const express = require('express');
const warehouseController = require('../controllers/warehouse.controller');
const fieldsValidatorMiddleware = require('../utils/endpointsDataValidator');

const router = express.Router();

router.get('/', warehouseController.getAllWarehouses);
router.get('/:id', warehouseController.getWarehouseById);
router.post('/', fieldsValidatorMiddleware, warehouseController.createWarehouse);
router.put('/:id', fieldsValidatorMiddleware, warehouseController.updateWarehouse);
router.delete('/:id', warehouseController.deleteWarehouse);

module.exports = router;
