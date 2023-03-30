const express = require('express');
const inventoryController = require('../controllers/inventory.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const inventoryValidationSchema =  require('../orm/schemas/inventory.schema');


const router = express.Router();

router.get('/', inventoryController.getAllInventoriesController);
router.get('/:id', inventoryController.getInventoryByIdController);
router.post('/', endpointsDataValidator(inventoryValidationSchema), inventoryController.createInventoryController);
router.put('/:id', inventoryController.updateInventoryController);
router.delete('/:id', inventoryController.deleteInventoryController);

module.exports = router;
