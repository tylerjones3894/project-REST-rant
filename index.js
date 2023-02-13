// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const app = express()
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

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