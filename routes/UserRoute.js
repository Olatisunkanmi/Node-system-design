const router = require('express').Router();
const MiddleWare = require('../MiddleWare/auth');
const UserController = require('../Controllers/UserController');

router
	.route('/')
	.get(UserController.getAllUsers)
	.post(UserController.createUsers);

router
	.route('/:id')
	.get(MiddleWare.checkID, UserController.getAUser)
	.patch(MiddleWare.checkUserUpdate, UserController.updateUsers)
	.delete(MiddleWare.checkID, UserController.deleteUsers);
module.exports = router;
