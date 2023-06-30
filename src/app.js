const express = require('express')
const app = express()
const PORT = 8080

//exportaciones

const { bookRouter, libraryRouter, userRouter, authRouter } = require('./routes')
const { initializeDB } = require('./config/db-config')
const createDataUser = require('./config/initUser-config')

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(`Call made to resource ${req.url} whith method ${req.method}`)
    next()
})

//rutas
app.use('/book', bookRouter)
app.use('/library', libraryRouter)
app.use('/user', userRouter)
app.use('/login', authRouter)



//puerto escuchando inicia base de datos con User Admin
app.listen(PORT, async () => {
    await initializeDB()
    createDataUser()
    console.log(`\nServer running in ${PORT}`)
})