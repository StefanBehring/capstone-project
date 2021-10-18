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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    firstMovieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    secondMovieId: {
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
    firstMovieWon: {
      type: mongoose.Schema.Types.Boolean,
    },
  },
  { versionKey: false }
)

module.exports = mongoose.model('Voting', schema)
