const { userService } = require('../services')

const createUser = async (req, res) => {
  try{
      const newUser = await userService.createUser(req.body)
      
      !newUser
      ? res.status(404).json({ message: 'Error when creating User'})
      :res.json(newUser)

  }catch(err){
      res.status(400).json({ action: 'Create User', error: err.message})
  }

}

const getUser = async (req, res) =>{

  try{
      const user = await userService.getUser(req.params.userId)
      
      !user
      ? res.status(404).json({action: 'Get User', error: 'User Not Found'})
      : res.json(user)

  }catch (err) {
      res.status(400).json({action: 'getUser', error: err.message})

  }
}

const getAllUsers= async (req, res) =>{

  try{
      const users = await userService.getAllUsers()
      
      users.length !== 0
      ? res.json(users)
      : res.status(404).json({action: 'getUser', error: 'User Not Found'})
    
  }catch (err) {
      res.status(400).json({action: 'getAllUsers', error: err.message})

  }
}

const updateUser = async (req, res) =>{
  try{
    const id = req.params.userId
    const body = req.body
    const userUpdated = await userService.updateUser(id, body)
    
    userUpdated
    ? res.json(userUpdated)
    : res.status(404).json({action: 'Update User', error: 'User Not Found'})

  }catch(err){
    res.status(400).json({action: 'updateUser', error: err.message})
  }
}


const deleteUser = async (req, res) =>{
  try{
    const id = req.params.userId
    const userDeleted = await userService.deleteUser(id)
    
    userDeleted
    ? res.json(userDeleted)
    : res.status(404).json({action: 'Delete User', error: 'User Not Found'})

  }catch(err){
    res.status(400).json({action: 'deleteUser', error: err.message})
  }
}


module.exports = { createUser, getUser, getAllUsers, updateUser, deleteUser }