const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    tmdbId: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Movie', schema)
