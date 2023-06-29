const { bookProvider } = require('../providers')


const createBook = async (book) => {
    
    try{
        const newBook = await bookProvider.createBook(book)
        return newBook
    }catch(err){
        console.error('Error when creating Book', err)
        throw err
    }
}

const getBook = async (bookId)=>{
    try{
        const book = await bookProvider.getBook(bookId)
        return book
    }catch(err){
        console.error('Error when searching Book', err)
        throw err
    }

    
}

const getAllBooks = async ()=>{
    try{
        const books = await bookProvider.getAllBooks()
        return books
    }catch(err){
        console.error('Error when searching Books', err)
        throw err
    }
}

const updateBook = async (id, body)=> {
    
    try{
        const bookUpdated = await bookProvider.updateBook(id, body)
        return bookUpdated
    }catch (err){
        console.error('Error updating the book',err)
        throw err
    }
}

const deleteBook = async (id)=> {
    
    try{
        const bookDeleted = await bookProvider.deleteBook(id)
        return bookDeleted
    }catch (err){
        console.error('Error deleting the book',err)
        throw err
    }
}

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook }