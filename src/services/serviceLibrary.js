const { libraryProvider } = require('../providers')


const createLibrary = async (library) => {
    
    try{
        const newLibrary = await libraryProvider.createLibrary(library)
        return newLibrary
    }catch(err){
        console.error('Error when creating Library', err)
        throw err
    }
}

const getLibrary = async (libraryId)=>{

    try{
        const library = await libraryProvider.getLibrary(libraryId)
        return library
        
    }catch(err){
        console.error('Error when searching Library', err)
        throw err
    }

    
}


const getAllLibrary = async ()=>{
    try{
        const libraries = await libraryProvider.getAllLibraries()
        return libraries
    }catch(err){
        console.error('Error when searching Books', err)
        throw err
    }

    
}

const updateLibrary = async (id, body)=> {
    
    try{
        const libraryUpdated = await libraryProvider.updateLibrary(id, body)
        return libraryUpdated
    }catch (err){
        console.error('Error updating the Library',err)
        throw err
    }
}

const deleteLibrary = async (id)=> {
    
    try{
        const libraryDeleted = await libraryProvider.deleteLibrary(id)
        return libraryDeleted
    }catch (err){
        console.error('Error deleting the Library',err)
        throw err
    }
}

const addBook = async (libraryId, book)=>{
    try{
        const libraryExist = await libraryProvider.getLibrary(libraryId)
        if(libraryExist){
            const bookAggregate = await libraryProvider.addBook(libraryId, book)
            return bookAggregate
        }
        return null

    }catch(err){
        console.error('The Book exist', err)
        throw err
    }
}

module.exports = { createLibrary, getLibrary, getAllLibrary, updateLibrary, deleteLibrary, addBook }