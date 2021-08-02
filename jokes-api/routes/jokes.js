const { Router } = require('express')

const jokesController = require('../controllers/jokes.controller')

const router = Router()

router.get('/', jokesController.getAllJokes)
router.get('/random', jokesController.getRandomJoke)
router.get('/:_id', jokesController.getOneJoke)

router.post('/new', jokesController.createNewJoke)
router.put('/update/:_id', jokesController.updateOneJoke)
router.delete('/delete/:_id', jokesController.deleteOneJoke)

module.exports = router
