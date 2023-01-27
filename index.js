// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

// PLACES
app.use('/places', require('./controllers/places.js'))

// 404 PAGE
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// LISTEN
app.listen(process.env.PORT)