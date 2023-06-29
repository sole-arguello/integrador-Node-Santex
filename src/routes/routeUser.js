const express = require('express')
const router = express.Router()
const { userController } = require("../controllers")
const { jwtValidMDW, userIsAdmin } = require('../middleware/authMdw')

router.post('/', userIsAdmin, userController.createUser)

router.get('/', userController.getAllUsers)
router.get('/:userId', userController.getUser)

router.put('/:userId', userIsAdmin, userController.updateUser)
router.delete('/:userId', userIsAdmin, userController.deleteUser)


module.exports = router 