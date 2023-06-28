const { userProvider } = require('../providers')

//auth
const createUser = async (user) => {
    
    try{
        console.log('logica de negocio')
        const newUser = await userProvider.createUser(user)
        if(!newUser){
            return 'User created'
        }else{
            return newUser
        }
        
    }catch(err){
        console.error('The User exist', err)
        throw err
    }
}

const getUser = async (userId)=>{
    try{
        console.log('logica de negocio')
        const user = await userProvider.getUser(userId)
        if(!user){
            return 'User exist'
        }else{
            
            return user
        }
    }catch(err){
        console.error('The User exist', err)
        throw err
    }

    
}

const updateUser = async (id, body)=> {
    
    try{
        console.log('Logica de negocio')
        const userUpdated = await userProvider.updateUser(id)
        return userUpdated
    }catch (err){
        console.error('Error updating the User',err)
        throw err
    }
}

const deleteUser = async (id)=> {
    
    try{
        console.log('Logica de negocio')
        const userDeleted = await userProvider.deleteUser(id)
        return userDeleted
    }catch (err){
        console.error('Error updating the User',err)
        throw err
    }
}


module.exports = { createUser, getUser, updateUser, deleteUser }