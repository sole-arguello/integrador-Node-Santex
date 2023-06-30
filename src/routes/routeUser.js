const express = require('express')
const router = express.Router()
const { userController } = require("../controllers")
const { userIsAdmin } = require('../middleware/authMdw')

router.post('/', userIsAdmin, userController.createUser)

router.get('/', userIsAdmin, userController.getAllUsers)
router.get('/:userId', userIsAdmin, userController.getUser)

router.put('/:userId', userIsAdmin, userController.updateUser)
router.delete('/:userId', userIsAdmin, userController.deleteUser)


module.exports = router 