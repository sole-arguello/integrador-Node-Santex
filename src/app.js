const express = require('express')
const app = express()
const PORT = 8080

//exportaciones
const { initializeDB } = require('./config/db-config')


//puerto escuchando
app.listen(PORT, async () => {
    await initializeDB()
    console.log(`\nServer running in ${PORT}`)
})