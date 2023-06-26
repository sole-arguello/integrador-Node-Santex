
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
        console.log('provider', bookId)
        const book = await Book.findByPk(bookId)
        return book
    }catch (error){
        console.error('Error when fetching Book',error)
        throw error
    }
}

const getIsbnBook = async (isbnBook)=> {
    
    try{
        console.log('provider', isbnBook)
        const books = await Book.findOne({
            where: {
                isbn: isbnBook
            }
        })
        console.log(books)
        return books
    }catch (error){
        console.error('Error when fetching Books',error)
        throw error
    }
}


const getAllBook = async ()=> {
    
    try{
        const books = await Book.findAll()
        return books
    }catch (error){
        console.error('Error when fetching Books',error)
        throw error
    }
}

const updateBook = async (id, body)=> {
    
    try{
        const bookUpdated = await Book.findByPk(id)
        if(bookUpdated){
            bookUpdated.update(body)
            return bookUpdated
        }else{
            return 'Book no exist'
        }
        
    }catch (error){
        console.error('Error when fetching Books',error)
        throw error
    }
}

const deleteBook = async (id)=> {
    
    try{
        const bookFound = await Book.findByPk(id)
        if(bookFound){
            await bookFound.destroy({
             where: {
                //deletedAt: 'destroyTime'
                id: id
             }
            })
            return bookFound
        }else{
            return 'Book no exist'
        }
        
    }catch (error){
        console.error('Error when fetching Books',error)
        throw error
    }
}

module.exports = { createBook, getBook, getIsbnBook, getAllBook, updateBook, deleteBook }