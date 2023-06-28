const { Library, Book } = require('../models')


const createLibrary = async (library) => {
    try{
        const newLibrary = await Library.create(library)
        return newLibrary
    }catch(err){
        console.error('Error when creating Library', err)
        throw err
    }
}

const getLibrary = async (libraryId)=> {

    try{
        const library = await Library.findByPk(libraryId)
        return library
    }catch (error){
        console.error('Error when fetching Library',error)
        throw error
    }
}

const getAllLibraries = async ()=> {
    
    try{
        const libraries = await Library.findAll()
        return libraries
    }catch (error){
        console.error('Error when fetching Libraries',error)
        throw error
    }
}

const updateLibrary = async (id, body)=> {
    
    try{
        const libraryUpdated = await Library.findByPk(id)
        if(libraryUpdated){
            libraryUpdated.update(body)
            return libraryUpdated
        }else{
            return 'Library no exist'
        }
        
    }catch (error){
        console.error('Error when fetching Libraries',error)
        throw error
    }
}

const deleteLibrary = async (id)=> {
    
    try{
        const libraryFound = await Library.findByPk(id)
        if(libraryFound){
            await libraryFound.destroy({
             where: {
                id: id
             }
            })
            return libraryFound
        }else{
            return 'Library no exist'
        }
        
    }catch (error){
        console.error('Error when fetching Libraries',error)
        throw error
    }
}

const addBook = async (libraryId, book) => {
    
    try{
        const bookAdd = await Book.create({...book, library:libraryId })
        return bookAdd
    }catch (error){
        console.error('Error when creating Book in Library',error)
        throw error
    }
}

module.exports = { createLibrary, getLibrary, getAllLibraries, updateLibrary, deleteLibrary, addBook }