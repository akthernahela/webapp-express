const express = require('express')
const router = express.Router()
const movieRouter = require('../moviesRouter')

router.get('/', movieRouter.index)

router.get('/:id', (req, res) => {
    res.send('Show the requested movie by id' + req.params.id)
})

module.exports = router