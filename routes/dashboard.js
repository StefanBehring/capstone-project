const express = require('express')
const auth = require('../middleware/auth')
const serverError = require('../lib/serverError')
const Movie = require('../models/Movie')
const User = require('../models/User')
const Voting = require('../models/Voting')

const router = express.Router()

router.get('/', auth, async (request, response, next) => {
  const userId = request.user.id

  try {
    const movies = await Movie.find()
    if (!movies) {
      console.error('Could not find movies')
      return next({ status: 404, message: 'Could not find movies' })
    }

    const votings = await Voting.find()
    if (!votings) {
      console.error('Could not find votings')
      return next({ status: 404, message: 'Could not find votings' })
    }

    const user = await User.findById(userId).select('unwatchedMovies')
    if (!user) {
      console.error('Could not find user')
      return next({ status: 404, message: 'Could not find user' })
    }

    const dashboardData = {
      moviesCount: movies.length,
      votingsCount: votings.length,
      unwatchedMoviesCount: user.unwatchedMovies.length,
    }
    response.status(200).json(dashboardData)
  } catch (error) {
    return serverError(error)
  }
})

module.exports = router
