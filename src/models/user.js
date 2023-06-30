const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db-config')


const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'El correo ya ha sido registrado'
        },
        validate: {
            isEmail:{
                args: true,
                msg: "Por favor, proporciona una dirección de correo electrónico válida",
            }
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    paranoid: true,
})

module.exports = User