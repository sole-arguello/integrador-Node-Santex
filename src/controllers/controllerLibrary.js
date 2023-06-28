const { libraryService } = require('../services')


const createLibrary = async (req, res) => {
  try{
      const newLibrary = await libraryService.createLibrary(req.body)
      if(!newLibrary){
        res.status(404).json({ message: 'Library does not exists'})
      }else{
        res.json(newLibrary)
      }
  }catch(err){
      res.status(400).json({ action: 'createLibrary', error: err.message})
  }

}

const getLibrary = async (req, res) =>{

  try{
      console.log('Get Library', req.params.libraryId)
      const library = await libraryService.getLibrary(req.params.libraryId)
      
      if(!library){
          res.status(404).json({action: 'getLibrary', error: 'Library Not Found'})
      }else{
          res.json(library)
      }
      
  }catch (err) {
      res.status(500).json({action: 'getLibrary', error: err.message})

  }
}

const getAllLibrary = async (req, res) =>{

  try{
      console.log('Get All Libraries')
      const libraries = await libraryService.getAllLibrary()
      res.json(libraries)
      
  }catch (err) {
      res.status(500).json({action: 'getAllLibraries', error: err.message})

  }
}

const updateLibrary = async (req, res) =>{
  try{
    console.log('updating library')
    const id = req.params.libraryId
    const body = req.body
    const libraryUpdated = await libraryService.updateLibrary(id, body)
    res.json(libraryUpdated)
  }catch(err){
    res.status(500).json({action: 'updateLibrary', error: err.message})
  }
}


const deleteLibrary = async (req, res) =>{
  try{
    console.log('Deleting Library')
    const id = req.params.libraryId
    const libraryDeleted = await libraryService.deleteLibrary(id)
    res.json(libraryDeleted)

  }catch(err){
    res.status(500).json({action: 'updateLibrary', error: err.message})
  }
}

module.exports = { createLibrary, getLibrary, getAllLibrary, updateLibrary, deleteLibrary }