const express = require('express');
const router = express.Router();

const positionController = require('../controllers/position.controller');
const fieldsValidatorMiddleware = require('../utils/endpointsDataValidator');

router.get('/', positionController.getAllPositions);
router.get('/:id', positionController.getPositionById);
router.post('/',fieldsValidatorMiddleware,  positionController.createPosition);
router.put('/:id',fieldsValidatorMiddleware,  positionController.updatePosition);
router.delete('/:id', positionController.deletePosition);

module.exports = router;
