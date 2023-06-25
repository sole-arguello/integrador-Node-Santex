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
        const book = await Book.findByPk(bookId)
        return book
    }catch (error){
        console.error('Error when fetching Book',error)
        throw error
    }
}

module.exports = { createBook, getBook }