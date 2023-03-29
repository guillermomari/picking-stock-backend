const express = require('express');
const router = express.Router();

const positionController = require('../controllers/position.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');

router.get('/', positionController.getAllPositions);
router.get('/:id', positionController.getPositionById);
router.post('/',endpointsDataValidator,  positionController.createPosition);
router.put('/:id',  positionController.updatePosition);
router.delete('/:id', positionController.deletePosition);

module.exports = router;
