const express = require('express');
const router = express.Router();

const positionController = require('../controllers/position.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const positionValidationSchema =  require('../orm/schemas/roles.schema');


router.get('/', positionController.getAllPositionsController);
router.get('/:id', positionController.getPositionByIdController);
router.post('/',endpointsDataValidator(positionValidationSchema),  positionController.createPositionController);
router.put('/:id',  positionController.updatePositionController);
router.delete('/:id', positionController.deletePositionController);

module.exports = router;
