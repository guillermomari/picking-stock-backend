const express = require('express');
const statusController = require('../controllers/status.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const statusValidationSchema =  require('../orm/schemas/status.schema');


const router = express.Router();

router.get('/', statusController.getAllstatusesController);
router.get('/:id', statusController.getstatusByIdController);
router.post('/', endpointsDataValidator(statusValidationSchema), statusController.createStatusController);
router.put('/:id', statusController.updateStatusController);
router.delete('/:id', statusController.deleteStatusController);

module.exports = router;
