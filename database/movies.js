const express = require('express')
const router = express.Router()
const movieRouter = require('../moviesRouter')

router.get('/', movieRouter.index)

router.get('/:id', movieRouter.show)

module.exports = router