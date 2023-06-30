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
        const library = await Library.findByPk(libraryId, {include: {all: true}})
        return library
    }catch (error){
        console.error('Error when fetching Library',error)
        throw error
    }
}

const getAllLibraries = async ()=> {
    
    try{
        const libraries = await Library.findAll({include: {all: true}})
        return libraries
    }catch(error){
        console.error('Error when Searching Libraries',error)
        throw error
    }
}

const updateLibrary = async (id, body)=> {
    
    try{
        const libraryUpdated = await Library.findByPk(id)
        if(libraryUpdated){
           return await libraryUpdated.update(body)
            
        }
        return false
        
    }catch(error){
        console.error('Error Update Library, Not Found',error)
        throw error
    }
}

const deleteLibrary = async (libraryId)=> {
    
    try{
        const libraryFound = await Library.findByPk(libraryId)
        if(libraryFound){
            await libraryFound.destroy({
                where: {
                    id: libraryId
                }
            })
            Book.update( { library: null }, 
                { where: { library: libraryId } } )
            return libraryFound
        }
        return false
        
    }catch(error){
        console.error('Error Delete Library, Not Found',error)
        throw error
    }
}

const addBook = async (libraryId, book) => {
    
    try{
        const libraryFound = Library.findByPk(libraryId)
        if(libraryFound){
            const bookAdd = await Book.create({ ...book, "library":libraryId })
            return bookAdd
        }
        return false

    }catch (error){
        console.error('Error Create Book in Library',error)
        throw error
    }
}

module.exports = { createLibrary, getLibrary, getAllLibraries, updateLibrary, deleteLibrary, addBook }