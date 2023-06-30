const express = require('express')
const router = express.Router()
const { libraryController } = require("../controllers")
const { jwtValidMDW, userIsAdmin } = require('../middleware/authMdw')


router.post('/', userIsAdmin, libraryController.createLibrary)

router.get('/', jwtValidMDW, libraryController.getAllLibrary)
router.get('/:libraryId', jwtValidMDW, libraryController.getLibrary)

router.put('/:libraryId', userIsAdmin, libraryController.updateLibrary)
router.delete('/:libraryId', userIsAdmin, libraryController.deleteLibrary)

router.post('/:libraryId/book', userIsAdmin, libraryController.addBook)

module.exports = router 