const express = require('express')
const router = express.Router()
const { libraryController } = require("../controllers")


router.post('/', libraryController.createLibrary)

router.get('/', libraryController.getAllLibrary)
router.get('/:libraryId', libraryController.getLibrary)

router.put('/:libraryId', libraryController.updateLibrary)
router.delete('/:libraryId', libraryController.deleteLibrary)

router.post('/:libraryId/book', libraryController.addBook)

module.exports = router 