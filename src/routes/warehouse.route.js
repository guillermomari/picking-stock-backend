const express = require('express');
const warehouseController = require('../controllers/warehouse.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');

const router = express.Router();

router.get('/', warehouseController.getAllWarehouses);
router.get('/:id', warehouseController.getWarehouseById);
router.post('/', endpointsDataValidator, warehouseController.createWarehouse);
router.put('/:id',  warehouseController.updateWarehouse);
router.delete('/:id', warehouseController.deleteWarehouse);

module.exports = router;
