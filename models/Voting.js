const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    first_movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    second_movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    isVoted: {
      type: mongoose.Schema.Types.Boolean,
      required: true,
    },
    first_movie_won: {
      type: mongoose.Schema.Types.Boolean,
      required: true,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Voting', schema)
