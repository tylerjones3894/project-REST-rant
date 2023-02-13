// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

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

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })

module.exports.Place = require('./places')

// LISTEN
app.listen(process.env.PORT)