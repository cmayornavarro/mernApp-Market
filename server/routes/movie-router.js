const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')

const router = express.Router()

router.post('/Product', MovieCtrl.createMovie)
router.put('/Product/:id', MovieCtrl.updateMovie)
router.delete('/Product/:id', MovieCtrl.deleteMovie)
router.get('/Product/:id', MovieCtrl.getMovieById)
router.get('/Products', MovieCtrl.getMovies)

module.exports = router