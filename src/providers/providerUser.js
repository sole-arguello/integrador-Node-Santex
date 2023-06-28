
const { User } = require('../models')


const createUser = async (user) => {
    try{
        const newUser = await User.create(user)
        return newUser
    }catch(err){
        console.error('Error when creating User', err)
        throw err
    }
}

const getUser = async (userId)=> {
    
    try{
        const user = await User.findByPk(userId, {include: {all: true}})
        return user
    }catch (error){
        console.error('Error when fetching User',error)
        throw error
    }
}

const getAllUsers = async ()=> {
    
    try{
        const users = await User.findAll()
        return users
    }catch (error){
        console.error('Error when fetching Users',error)
        throw error
    }
}

const updateUser = async (id, body)=> {
    
    try{
        const userUpdated = await User.findByPk(id)
        if(userUpdated){
            await userUpdated.update(body)
            return userUpdated
        }else{
            return 'User no exist'
        }
        
    }catch (error){
        console.error('Error when fetching Users',error)
        throw error
    }
}

const deleteUser = async (id)=> {
    
    try{
        const userFound = await User.findByPk(id)
        if(userFound){
            await userFound.destroy({
             where: {
                //deletedAt: 'destroyTime'
                id: id
             }
            })
            return userFound
        }else{
            return 'User no exist'
        }
        
    }catch (error){
        console.error('Error when fetching Users',error)
        throw error
    }
}


module.exports = { createUser, getUser,getAllUsers, updateUser, deleteUser }