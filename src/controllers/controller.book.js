const { bookService } = require('../services')

const createBook = async (req, res) => {
  try{
      const newBook = await bookService.createBook(req.body)
      // if(!newBook)
      // res.status(404).json({ message: 'Book does not exists'})
      res.json(newBook)
  }catch(err){
      res.status(400).json({ action: 'createBook', error: err.message})
  }

}


module.exports = { createBook }