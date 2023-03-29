const express = require('express');
const contabilizationController = require('../controllers/contabilization_report.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const contabilization_reportValidationSchema =  require('../orm/schemas/contabilization_report.schema');


const router = express.Router();

router.get('/', contabilizationController.getAllReports);
router.get('/:id', contabilizationController.getReportById);
router.post('/', endpointsDataValidator(contabilization_reportValidationSchema), contabilizationController.createReport);
router.put('/:id', contabilizationController.updateReport);
router.delete('/:id', contabilizationController.deleteReport);

module.exports = router;
