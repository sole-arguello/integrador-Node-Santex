const { bookProvider } = require('../providers')

//auth
const createBook = async (book) => {
    try{
        const newBook = await bookProvider.createBook(book)
        if(!newBook){
            console.error('The ISBN exist the Book ', err)
        }else{
            return newBook
        }
        
    }catch(err){
        console.error('The ISBN exist the Book ', err)
        throw err
    }
}

module.exports = { createBook }