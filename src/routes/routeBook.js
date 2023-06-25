const express = require('express')
const router = express.Router()
const { bookController } = require("../controllers")

router.post('/', bookController.createBook)

router.get('/all', bookController.getAllBook)
router.get('/:isbnBook', bookController.getIsbnBook)
router.get('/:bookId', bookController.getBook)
router.put('/:bookId', bookController.updateBook)
router.delete('/:bookId', bookController.deleteBook)

 
module.exports = router 