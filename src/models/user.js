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
        // validate: {
        //     is: /^[a-z]+$/i,
        //     len: [3],
        //     msg: "El campo debe ser mayor a 3 caracteres",
        // },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            arg: true,
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
        // validate: {
        //     len: [4],
        //     msg: "El password debe ser minimo 4 caracteres",
        // },

    },
},{
    paranoid: true,
})

module.exports = User