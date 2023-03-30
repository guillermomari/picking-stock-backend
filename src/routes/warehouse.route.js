const express = require('express');
const warehouseController = require('../controllers/warehouse.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const warehouseValidationSchema =  require('../orm/schemas/warehouse.schema');

const router = express.Router();

router.get('/', warehouseController.getAllWarehousesController);
router.get('/:id', warehouseController.getWarehouseByIdController);
router.post('/', endpointsDataValidator(warehouseValidationSchema), warehouseController.createWarehouseController);
router.put('/:id',  warehouseController.updateWarehouseController);
router.delete('/:id', warehouseController.deleteWarehouseController);

module.exports = router;
