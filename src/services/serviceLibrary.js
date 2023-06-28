const { libraryProvider } = require('../providers')

//(AUTH)
const createLibrary = async (library) => {
    
    try{
        console.log('logica de negocio')
        const newLibrary = await libraryProvider.createLibrary(library)
        if(!newLibrary){
            return 'Library created'
        }else{
            return newLibrary
        }
        
    }catch(err){
        console.error('The Library exist', err)
        throw err
    }
}

const getLibrary = async (libraryId)=>{

    try{
        console.log('logica de negocio')
        const library = await libraryProvider.getLibrary(libraryId)
        if(!library){
            return 'Library exist'
        }else{
            
            return library
        }
    }catch(err){
        console.error('The Library exist', err)
        throw err
    }

    
}


const getAllLibrary = async ()=>{
    try{
        console.log('logica de negocio')
        const libraries = await libraryProvider.getAllLibraries()
        return libraries
    }catch(err){
        console.error('The Library exist', err)
        throw err
    }

    
}
//(AUTH)
const updateLibrary = async (id, body)=> {
    
    try{
        console.log('Logica de negocio')
        const libraryUpdated = await libraryProvider.updateLibrary(id, body)
        return libraryUpdated
    }catch (err){
        console.error('Error updating the Library',err)
        throw err
    }
}
//(AUTH)
const deleteLibrary = async (id)=> {
    
    try{
        console.log('Logica de negocio')
        const libraryDeleted = await libraryProvider.deleteLibrary(id)
        return libraryDeleted
    }catch (err){
        console.error('Error updating the Library',err)
        throw err
    }
}

module.exports = { createLibrary, getLibrary, getAllLibrary, updateLibrary, deleteLibrary }