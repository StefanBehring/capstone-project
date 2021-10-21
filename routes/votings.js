const express = require('express')
const Voting = require('../models/Voting')
const Movie = require('../models/Movie')

const router = express.Router()

router.post('/', (request, response, next) => {
  const { userId, firstMovieId, secondMovieId } = request.body

  if (userId === '' || firstMovieId === '' || secondMovieId === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  const newVote = {
    userId,
    firstMovieId,
    secondMovieId,
    isVoted: false,
  }

  Voting.create(newVote)
    .then(vote => response.status(201).json(vote))
    .catch(next)
})

router.get('/:votingId', async (request, response, next) => {
  const { votingId } = request.params

  try {
    const vote = await Voting.findById(votingId)
    if (!vote) {
      throw new Error('The vote does not exist!')
    }
    response.status(200).json(vote)
  } catch (error) {
    console.error(error)
    return next({ status: 500, message: 'Server error' })
  }
})

router.patch('/:votingId', async (request, response, next) => {
  const { votingId } = request.params
  const { isCanceled, firstMovieWon } = request.body

  if (firstMovieWon === undefined || isCanceled === undefined) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  try {
    if (!isCanceled) {
      const vote = await Voting.findById(votingId)
      if (!vote) {
        console.error('Vote does not exist')
        return next({ status: 404, message: 'Vote does not exist' })
      }

      const firstMovie = await Movie.findById(vote.firstMovieId)
      if (!firstMovie) {
        console.error('Movie does not exist')
        return next({ status: 404, message: 'Movie does not exist' })
      }

      const secondMovie = await Movie.findById(vote.secondMovieId)
      if (!secondMovie) {
        console.error('Movie does not exist')
        return next({ status: 404, message: 'Movie does not exist' })
      }

      const eloNumber =
        1 / (1 + Math.pow(10, (firstMovie.rating - secondMovie.rating) / 400))
      const eloRatingFirstMovie = Math.round(
        firstMovie.rating + 10 * (firstMovieWon - eloNumber)
      )
      const eloRatingSecondMovie = Math.round(
        secondMovie.rating + 10 * (!firstMovieWon - (1 - eloNumber))
      )

      await Movie.findByIdAndUpdate(firstMovie._id, {
        rating: eloRatingFirstMovie,
      })
      await Movie.findByIdAndUpdate(secondMovie._id, {
        rating: eloRatingSecondMovie,
      })
    }

    const newVote = await Voting.findByIdAndUpdate(
      votingId,
      { isVoted: true, isCanceled, firstMovieWon },
      { new: true }
    )
    response.status(200).json(newVote)
  } catch (error) {
    console.error(error)
    return next({ status: 500, message: 'Server error' })
  }
})

module.exports = router
