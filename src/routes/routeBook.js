const express = require('express')
const router = express.Router()
const { bookController } = require("../controllers")
const { jwtValidMDW, userIsAdmin } = require('../middleware/authMdw')

router.post('/', userIsAdmin, bookController.createBook)

router.get('/', jwtValidMDW, bookController.getAllBooks)
router.get('/:bookId', jwtValidMDW, bookController.getBook)

router.put('/:bookId', userIsAdmin, bookController.updateBook)
router.delete('/:bookId', userIsAdmin, bookController.deleteBook)

 
module.exports = router