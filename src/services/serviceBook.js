const { bookProvider } = require('../providers')

//auth
const createBook = async (book) => {
    
    try{
        console.log('logica de negocio')
        const newBook = await bookProvider.createBook(book)
        if(!newBook){
            console.log('Book created', newBook)
        }else{
            return newBook
        }
        
    }catch(err){
        console.error('The exist the Book ', err)
        throw err
    }
}

const getBook = async (bookId)=>{
    try{
        console.log('logica de negocio')
        const book = await bookProvider.getBook(bookId)
        if(!book){
            console.log('Book exist', bookId)
        }else{
            
            return book
        }
    }catch(err){
        console.error('The Book exist', err)
        throw err
    }

    
}

const getAllBook = async ()=>{
    try{
        console.log('logica de negocio')
        const books = await bookProvider.getAllBook()
        return books
    }catch(err){
        console.error('The Book exist', err)
        throw err
    }

    
}

const updateBook = async (id, body)=> {
    
    try{
        console.log('Logica de negocio')
        const bookUpdated = await bookProvider.updateBook(id)
        return bookUpdated
    }catch (err){
        console.error('Error updating the book',err)
        throw err
    }
}

const deleteBook = async (id)=> {
    
    try{
        console.log('Logica de negocio')
        const bookDeleted = await bookProvider.deleteBook(id)
        return bookDeleted
    }catch (err){
        console.error('Error updating the book',err)
        throw err
    }
}

module.exports = { createBook, getBook, getAllBook, updateBook, deleteBook }