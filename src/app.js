const express = require('express')
const app = express()
const PORT = 8080

//exportaciones
const { initializeDB } = require('./config/db-config')
const { bookRouter, libraryRouter, userRouter, authRouter } = require('./routes')

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



//puerto escuchando
app.listen(PORT, async () => {
    await initializeDB()
    console.log(`\nServer running in ${PORT}`)
})