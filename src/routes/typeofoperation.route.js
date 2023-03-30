const express = require('express');
const typeOfOpController = require('../controllers/typeofoperation.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const typeOfOpValidationSchema =  require('../orm/schemas/typeofoperation.schema');


const router = express.Router();

router.get('/', typeOfOpController.getAlltypeOfOpsController);
router.get('/:id', typeOfOpController.gettypeOfOpByIdController);
router.post('/', endpointsDataValidator(typeOfOpValidationSchema), typeOfOpController.createtypeOfOpController);
router.put('/:id', typeOfOpController.updatetypeOfOpController);
router.delete('/:id', typeOfOpController.deletetypeOfOpController);

module.exports = router;
