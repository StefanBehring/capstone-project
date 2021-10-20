const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    unwatchedMovies: {
      type: Array,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('User', schema)
