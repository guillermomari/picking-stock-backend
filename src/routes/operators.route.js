const express = require('express');
const operatorController = require('../controllers/operators.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const operatorValidationSchema =  require('../orm/schemas/operators.schema');


const router = express.Router();

router.get('/', operatorController.getAllOperatorsController);
router.get('/:id', operatorController.getOperatorByIdController);
router.post('/', endpointsDataValidator(operatorValidationSchema), operatorController.createOperatorController);
router.put('/:id', operatorController.updateOperatorController);
router.delete('/:id', operatorController.deleteOperatorController);

module.exports = router;
