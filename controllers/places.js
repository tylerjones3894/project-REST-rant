const router = require('express').Router()

// INDEX
router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router