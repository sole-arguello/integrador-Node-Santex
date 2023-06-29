
const { Op } = require('sequelize')
const { User } = require('../models')


const createUser = async (user) => {
    try{
        const newUser = await User.create(user)
        return newUser
    }catch(err){
        console.error('Error Creating User', err)
        throw err
    }
}

const getUser = async (userId)=> {
    
    try{
        const user = await User.findByPk(userId, {include: {all: true}})
        return user
    }catch (error){
        console.error('Error Searching User',error)
        throw error
    }
}

const getAllUsers = async ()=> {
    
    try{
        const users = await User.findAll()
        return users
    }catch (error){
        console.error('Error Serching Users',error)
        throw error
    }
}

const updateUser = async (id, body)=> {
    
    try{
        const userUpdated = await User.findByPk(id)
        if(userUpdated){
            return await userUpdated.update(body)
        }
        return false
        
    }catch (error){
        console.error('Error Update User, User not found',error)
        throw error
    }
}

const deleteUser = async (id)=> {
    
    try{
        const userFound = await User.findByPk(id)
        if(userFound){
            await userFound.destroy({
                where: {
                    id: id
                }
            })
            return userFound
        }
    
        return false
        
        
    }catch (error){
        console.error('Error Delete User, Not Found',error)
        throw error
    }
}

const validateUser = async(options)=>{
    try {
       const userFound = await User.findAll(
        {where: {
               [Op.and]: [{email: options.user},{ password: options.pass}],
        },

        });
        if(userFound.length!= 0){

            return userFound
        }
       return false;
    } catch (err) {
       console.error('Error when validating User', err)
      return false;
    }
   };


module.exports = { createUser, getUser,getAllUsers, updateUser, deleteUser, validateUser }