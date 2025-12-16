const express = require('express')
const router = express.Router()
const movieController = require('../moviesController')

router.get('/', movieController.index)

router.get('/:id', movieController.show)

router.post('/', movieController.store)

module.exports = router