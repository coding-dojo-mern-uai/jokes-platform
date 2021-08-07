const jokesService = require('../services/jokes.service')

module.exports = {
  getAllJokes: async (req, res) => {
    const jokes = await jokesService.getAllJokes()
    res.send({ jokes })
  },
  getRandomJoke: async (req, res) => {
    const joke = await jokesService.getRandomJoke()
    res.send({ joke })
  },
  getOneJoke: async ({ params: { _id } }, res) => {
    const joke = await jokesService.getOneJoke(_id)
    res.send({ joke })
  },
  createNewJoke: async ({ body }, res) => {
    try {
      const joke = await jokesService.createNewJoke(body)
      res.send({ joke })
    } catch (error) {
      res.status(400).json(error)
    }
  },
  updateOneJoke: async ({ params: { _id }, body }, res) => {
    try {
      const joke = await jokesService.updateOneJoke(_id, body)
      res.send(joke)
    } catch (error) {
      res.status(400).json(error)
    }
  },
  deleteOneJoke: async ({ params: { _id } }, res) => {
    const { deletedCount } = await jokesService.deleteOneJoke(_id)
    if (deletedCount > 0) return res.status(204).send('Joke deleted')
    return res.status(404).send('Joke not found')
  }
}
