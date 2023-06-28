const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
})

const initializeDB = async () => { 
    try{
        await sequelize.authenticate()
        console.log('Conetion has been established successfully')
        await sequelize.sync({force: false})
    }catch(error) {
        console.error('Unable to connect to the database:', error)
    }
}

module.exports = {sequelize, initializeDB}