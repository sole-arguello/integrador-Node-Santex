const express = require('express')
const router = express.Router()
const { userController } = require("../controllers")
const { jwtValidMDW, userIsAdmin } = require('../middleware/authMdw')

router.post('/',jwtValidMDW, userIsAdmin, userController.createUser)

router.get('/', userController.getAllUsers)
router.get('/:userId', userController.getUser)

router.put('/:userId', jwtValidMDW, userIsAdmin, userController.updateUser)
router.delete('/:userId', jwtValidMDW, userIsAdmin, userController.deleteUser)


module.exports = router 