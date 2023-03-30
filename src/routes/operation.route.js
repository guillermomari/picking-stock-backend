const express = require('express');
const operationController = require('../controllers/operation.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const operationValidationSchema =  require('../orm/schemas/operation.schema');


const router = express.Router();

router.get('/', operationController.getAllOperationsController);
router.get('/:id', operationController.getOperationByIdController);
router.post('/', endpointsDataValidator(operationValidationSchema), operationController.createOperationController);
router.put('/:id', operationController.updateOperationController);
router.delete('/:id', operationController.deleteOperationController);

module.exports = router;
