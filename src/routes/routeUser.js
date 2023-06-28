const express = require('express')
const router = express.Router()
const { userController } = require("../controllers")

router.post('/', userController.createUser)

router.get('/', userController.getAllUsers)
router.get('/:userId', userController.getUser)

router.put('/:userId', userController.updateUser)
router.delete('/:userId', userController.deleteUser)


module.exports = router 