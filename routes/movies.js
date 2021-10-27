const express = require('express')
const serverError = require('../lib/serverError')
const Movie = require('../models/Movie')
const User = require('../models/User')

const router = express.Router()

router.get('/', async (request, response, next) => {
  const isToplist = request.query.isToplist

  try {
    let movies
    if (isToplist) {
      movies = await Movie.find().sort({ rating: -1 }).limit(100)
    } else {
      movies = await Movie.find()
    }
    if (!movies) {
      console.error('Error receiving movies from database')
      return next({
        status: 404,
        message: 'Error receiving movies from database',
      })
    }
    response.status(200).json(movies)
  } catch (error) {
    serverError(error, next)
  }
})

router.get('/voting/:userId', async (request, response, next) => {
  const { userId } = request.params

  try {
    const user = await User.findById(userId).select('unwatchedMovies')
    if (!user) {
      console.error('User does not exist')
      return next({ status: 404, message: 'User does not exist' })
    }
    const unwatchedMovies = user.unwatchedMovies

    const movies = await Movie.find()
    if (!movies) {
      console.error('Error receiving movies from database')
      return next({
        status: 404,
        message: 'Error receiving movies from database',
      })
    }

    const moviesAvailableCount = movies.length - unwatchedMovies.length
    if (moviesAvailableCount < 2) {
      const error = { message: 'Not enough movies in the database.' }
      console.error(error.message)
      next({ status: 400, message: error.message || 'No documents found' })
    }

    const availableMovies = movies.filter(
      movie => !unwatchedMovies.includes(movie._id)
    )

    let firstMovieIndex = Math.floor(Math.random() * availableMovies.length)
    let secondMovieIndex
    let gotSecondMovie = false
    do {
      secondMovieIndex = Math.floor(Math.random() * availableMovies.length)
      if (firstMovieIndex !== secondMovieIndex) {
        gotSecondMovie = true
      }
    } while (!gotSecondMovie)

    const dataVoting = [
      availableMovies[firstMovieIndex],
      availableMovies[secondMovieIndex],
    ]

    response.status(200).json(dataVoting)
  } catch (error) {
    serverError(error, next)
  }
})

module.exports = router
