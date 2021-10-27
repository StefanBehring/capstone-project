const express = require('express')
const serverError = require('../lib/serverError')
const auth = require('../middleware/auth')
const User = require('../models/User')

const router = express.Router()

router.get('/', auth, async (request, response, next) => {
  const userId = request.user.id

  try {
    const user = await User.findById(userId).select('unwatchedMovies')
    if (!user) {
      console.error('Could not find user')
      return next({ status: 404, message: 'Could not find user' })
    }

    response.status(200).json(user.unwatchedMovies)
  } catch (error) {
    return serverError(error)
  }
})

router.patch('/', auth, async (request, response, next) => {
  const userId = request.user.id
  const { unwatchedMovieId } = request.body

  try {
    const user = await User.findById(userId)
    if (!user) {
      console.error('User does not exist')
      return next({ status: 404, message: 'User does not exist' })
    }

    const newUnwatchedMovies = user.unwatchedMovies.filter(
      movieId => movieId !== unwatchedMovieId
    )
    await User.findByIdAndUpdate(userId, {
      unwatchedMovies: newUnwatchedMovies,
    })

    response.status(200).json({ newUnwatchedMovies })
  } catch (error) {
    return serverError(error)
  }
})

module.exports = router
