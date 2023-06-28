const express = require('express')
const router = express.Router()
const { userController } = require("../controllers")

router.post('/', userController.createUser)

router.get('/:userId', userController.getUser)

router.put('/:libraryId', userController.updateUser)
router.delete('/:libraryId', userController.deleteUser)


module.exports = router 