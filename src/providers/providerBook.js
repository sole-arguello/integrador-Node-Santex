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

module.exports = { createBook }