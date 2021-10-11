const mongoose = require('mongoose')

/*
  isVoted
  shows true or false depending if there was a voting or not

  isCanceled
  is true if the voting was canceled by clicking on an 'I dont know' button

  first_movie_won
  must only be visible after a vote happened
*/

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
    isCanceled: {
      type: mongoose.Schema.Types.Boolean,
    },
    first_movie_won: {
      type: mongoose.Schema.Types.Boolean,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Voting', schema)
