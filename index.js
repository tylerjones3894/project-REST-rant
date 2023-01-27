// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// PLACES
app.use('/places', require('./controllers/places'))

// ROUTES
app.get('/', (req, res) => {
    res.render('home')
})

// 404 PAGE
app.get('*', (req, res) => {
    res.status(404).render('error404')
})

// LISTEN
app.listen(process.env.PORT)