const { bookService } = require('../services')

const createBook = async (req, res) => {
  try{
      const newBook = await bookService.createBook(req.body)
      if(!newBook){
        res.status(404).json({ message: 'Book does not exists'})
      }else{
        res.json(newBook)
      }
  }catch(err){
      res.status(400).json({ action: 'createBook', error: err.message})
  }

}

const getBook= async (req, res) =>{

  try{
      console.log('Get book', req.params.bookId)
      const book = await bookService.getBook(req.params.bookId)
      
      if(!book){
          res.status(404).json({action: 'getBook', error: 'Book Not Found'})
      }else{
          res.json(book)
      }
      
  }catch (err) {
      res.status(500).json({action: 'getBook', error: err.message})

  }
}


const getAllBook= async (req, res) =>{

  try{
      console.log('Get All Books')
      const books = await bookService.getAllBook()
      res.json(books)
      
  }catch (err) {
      res.status(500).json({action: 'getAllBook', error: err.message})

  }
}

const updateBook = async (req, res) =>{
  try{
    console.log('updating book')
    const id = req.params.bookId
    const body = req.body
    const bookUpdated = await bookService.updateBook(id, body)
    res.json(bookUpdated)
  }catch(err){
    res.status(500).json({action: 'updateBook', error: err.message})
  }
}


const deleteBook = async (req, res) =>{
  try{
    console.log('Deleting book')
    const id = req.params.bookId
    const bookDeleted = await bookService.deleteBook(id)
    res.json(bookDeleted)

  }catch(err){
    res.status(500).json({action: 'updateBook', error: err.message})
  }
}

module.exports = { createBook, getBook, getAllBook, updateBook, deleteBook }