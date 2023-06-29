const { bookService } = require('../services')

const createBook = async (req, res) => {
  try{
      const newBook = await bookService.createBook(req.body)
      if(!newBook){
        res.status(404).json({ message: 'Error when creating Book'})
      }
      res.json(newBook)
      
  }catch(err){
      res.status(400).json({ action: 'createBook', error: err.message})
  }

}

const getBook= async (req, res) =>{

  try{
      console.log('Get book', req.params.bookId)
      const book = await bookService.getBook(req.params.bookId)
      
      if(!book){
          res.status(404).json({action: 'Get Book', error: 'Book Not Found'})
      }
      res.json(book)
      
  }catch (err) {
      res.status(400).json({action: 'getBook', error: err.message})

  }
}


const getAllBooks = async (req, res) =>{

  try{
      const books = await bookService.getAllBooks()
      if(books.length !== 0){
        res.json(books)
      }
      res.status(404).json({action: 'getBook', error: 'Book Not Found'})
      
  }catch (err) {
      res.status(400).json({action: 'getAllBooks', error: err.message})

  }
}

const updateBook = async (req, res) =>{
  try{
    const id = req.params.bookId
    const body = req.body
    const bookUpdated = await bookService.updateBook(id, body)
    if(bookUpdated){
      res.json(bookUpdated)
    }
    res.status(404).json({action: 'Update Book', error: 'Book Not Found'})
  }catch(err){
    res.status(400).json({action: 'updateBook', error: err.message})
  }
}


const deleteBook = async (req, res) =>{
  try{
    const id = req.params.bookId
    const bookDeleted = await bookService.deleteBook(id)
    if(bookDeleted){
      res.json(bookDeleted)
    }
    res.status(404).json({action: 'Delete Book', error: 'Book Not Found'})

  }catch(err){
    res.status(400).json({action: 'deleteBook', error: err.message})
  }
}

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook }