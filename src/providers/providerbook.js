
const { Book } = require('../models')


const createBook = async (book) => {
    try{
        const newBook = await Book.create(book)
        return newBook
    }catch(err){
        console.error('Error when creating Book', err)
        throw err
    }
}

const getBook = async (bookId)=> {
    
    try{
        const book = await Book.findByPk(bookId)//{include: {all: true}}
        return book
    }catch (error){
        console.error('Error when Searching Book',error)
        throw error
    }
}


const getAllBooks = async ()=> {
    
    try{
        const books = await Book.findAll()
        return books
    }catch (error){
        console.error('Error when Searching Books',error)
        throw error
    }
}

const updateBook = async (id, body)=> {
    
    try{
        const bookUpdated = await Book.findByPk(id)
        if(bookUpdated){
            return await bookUpdated.update(body)
             
        }
        return false
    }catch (error){
        console.error('Error Update Book, Not Found',error)
        throw error
    }
}

const deleteBook = async (id)=> {
    
    try{
        const bookFound = await Book.findByPk(id)
        if(bookFound){
            await bookFound.destroy({
                where: {
                    id: id
                }
            })
            return bookFound
        }
        return false
        
        
    }catch (error){
        console.error('Error Delete Book, Not Found',error)
        throw error
    }
}

module.exports = { createBook, getBook, getAllBooks, updateBook, deleteBook }