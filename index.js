// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// 404 PAGE
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// LISTEN
app.listen(process.env.PORT)