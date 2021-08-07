const Joke = require('../models/Joke')

module.exports = {
  getAllJokes: () => Joke.find({}),
  getRandomJoke: async () => {
    // const jokes = await Joke.find({})
    // const random = Math.floor(Math.random() * (jokes.length - 1))
    const jokesAmount = await Joke.countDocuments()
    const random = Math.floor(Math.random() * (jokesAmount - 1))
    const joke = await Joke.findOne({}).skip(random)
    return joke
  },
  // Joke.findOne({_id: id})
  getOneJoke: (_id) => Joke.findOne({ _id }),
  createNewJoke: (joke) => {
    const newJoke = new Joke(joke)
    return newJoke.save()
  },
  // query, udpate, options
  updateOneJoke: (_id, joke) => Joke.findOneAndUpdate({ _id }, joke, { new: true, runValidators: true }),
  deleteOneJoke: (_id) => {
    return Joke.deleteOne({ _id })
  }
}
