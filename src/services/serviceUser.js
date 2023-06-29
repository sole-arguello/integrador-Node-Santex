const { userProvider } = require('../providers')


const createUser = async (user) => {
    
    try{
        const newUser = await userProvider.createUser(user)
        return newUser
        
    }catch(err){
        console.error('Error when creating User', err)
        throw err
    }
}

const getUser = async (userId)=>{
    try{
        const user = await userProvider.getUser(userId)
        return user
        
    }catch(err){
        console.error('Error when searching User', err)
        throw err
    }

    
}

const getAllUsers = async ()=>{
    try{
        const users = await userProvider.getAllUsers()
        return users
    }catch(err){
        console.error('Error when searching Users', err)
        throw err
    }

    
}

const updateUser = async (id, body)=> {
    
    try{
        const userUpdated = await userProvider.updateUser(id, body)
        return userUpdated
    }catch (err){
        console.error('Error updating the User',err)
        throw err
    }
}

const deleteUser = async (id)=> {
    
    try{
        const userDeleted = await userProvider.deleteUser(id)
        return userDeleted
    }catch (err){
        console.error('Error deleting the User',err)
        throw err
    }
}
const validateUser = async (user, pass)=>{
    try{
      const userFound = await userProvider.validateUser({user, pass})
      return userFound
    }catch(err){
      console.log('Error Validate User')
      throw err
    }
}

module.exports = { createUser, getUser,getAllUsers, updateUser, deleteUser, validateUser }