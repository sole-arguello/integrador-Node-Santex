const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db-config')


const Book = sequelize.define('Books', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: {
                args: true,
                msg: "El campo 'year' debe ingresar valores numericos"
            }
        }

    },
    library: {
        type: DataTypes.INTEGER,
        allowNull: true,
        foreignKey: true,
    }
},{
    paranoid: true,
})

module.exports = Book