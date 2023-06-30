const { libraryService } = require('../services')


const createLibrary = async (req, res) => {
  try{
      const newLibrary = await libraryService.createLibrary(req.body)
      if(!newLibrary){
        res.status(404).json({ message: 'Error when creating Library'})
      }
      res.json(newLibrary)
  }catch(err){
      res.status(400).json({ action: 'Create Library', error: err.message})
  }

}

const getLibrary = async (req, res) =>{

  try{
      const library = await libraryService.getLibrary(req.params.libraryId)
      
      if(!library){
          res.status(404).json({action: 'Get Library', error: 'Library Not Found'})
      }else{
        res.json(library)
      }
     
      
    }catch (err) {
      res.status(400).json({action: 'getLibrary', error: err.message})

  }
}

const getAllLibrary = async (req, res) =>{

  try{
      const libraries = await libraryService.getAllLibrary()
      if(libraries.length !== 0){
        res.json(libraries)
      }
      res.status(404).json({action: 'getLibrary', error: 'Library Not Found'})
      
  }catch (err) {
      res.status(400).json({action: 'getAllLibraries', error: err.message})

  }
}

const updateLibrary = async (req, res) =>{
  try{
    const id = req.params.libraryId
    const body = req.body
    const libraryUpdated = await libraryService.updateLibrary(id, body)
    if(libraryUpdated){
      res.json(libraryUpdated)
    }
    res.status(404).json({action: 'Update Library', error: 'Library Not Found'})
  }catch(err){
    res.status(400).json({action: 'updateLibrary', error: err.message})
  }
}


const deleteLibrary = async (req, res) =>{
  try{
    const id = req.params.libraryId
    const libraryDeleted = await libraryService.deleteLibrary(id)
    if(libraryDeleted){
      res.json(libraryDeleted)
    }
    res.status(404).json({action: 'Delete Library', error: 'Library Not Found'})
    
  }catch(err){
    res.status(400).json({action: 'deleteLibrary', error: err.message})
  }
}

const addBook = async (req, res) => {
  try{
    const library = await libraryService.addBook(req.params.libraryId, req.body)
    
    if(!library){
        res.status(404).json({action: 'Not Add Book', error: 'Library Not Found'})
    }
    res.json(library)
  
    
  }catch (err) {
      res.status(400).json({action: 'addBook', error: err.message})

  }

}


module.exports = { createLibrary, getLibrary, getAllLibrary, updateLibrary, deleteLibrary, addBook }