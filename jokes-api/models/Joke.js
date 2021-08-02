const Mongoose = require('mongoose')

const jokeSchema = new Mongoose.Schema(
  {
    setup: { type: String },
    punchline: { type: String }
  },
  { timestamps: true }
)

module.exports = Mongoose.model('jokes', jokeSchema)
