const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db-config')


const Library = sequelize.define('Libraries', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    paranoid: true,
})

module.exports = Library