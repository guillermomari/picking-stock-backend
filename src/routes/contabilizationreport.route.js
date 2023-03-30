const express = require('express');
const contabilizationController = require('../controllers/contabilization_report.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const contabilization_reportValidationSchema =  require('../orm/schemas/contabilization_report.schema');


const router = express.Router();

router.get('/', contabilizationController.getAllReportsController);
router.get('/:id', contabilizationController.getReportByIdController);
router.post('/', endpointsDataValidator(contabilization_reportValidationSchema), contabilizationController.createReportController);
router.put('/:id', contabilizationController.updateReportController);
router.delete('/:id', contabilizationController.deleteReportController);

module.exports = router;
