const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('All movies')
})

router.get('/:id', (req, res) => {
    res.send('Show the requested movie by id' + req.params.id)
})

module.exports = router