const express = require('express');
const usersController = require('../controllers/users.controller');
const {endpointsDataValidator} = require('../utils/endpointsDataValidator');
const usersValidationSchema =  require('../orm/schemas/users.schema');


const router = express.Router();

router.get('/', usersController.getAllUsersController);
router.get('/:id', usersController.getUserByIdController);
router.post('/', endpointsDataValidator(usersValidationSchema), usersController.createUserController);
router.put('/:id', usersController.updateUserController);
router.delete('/:id', usersController.deleteuserController);

module.exports = router;
