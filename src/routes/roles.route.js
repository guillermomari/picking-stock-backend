const express = require('express');
const rolesController = require('../controllers/roles.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const roleValidationSchema =  require('../orm/schemas/roles.schema');


const router = express.Router();

router.get('/', rolesController.getAllRolessController);
router.get('/:id', rolesController.getRolesByIdController);
router.post('/', endpointsDataValidator(roleValidationSchema), rolesController.createRolesController);
router.put('/:id', rolesController.updateRolesController);
router.delete('/:id', rolesController.deleteRolesController);

module.exports = router;
