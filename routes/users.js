const express = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const router = express.Router()

router.post('/', async (request, response, next) => {
  const { username, email, password } = request.body

  if (username === '' || email === '' || password === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  try {
    let userTest = await User.findOne({ username })
    if (userTest) {
      const errorUser = { message: 'Username already exists' }
      return next({ status: 400, message: errorUser.message })
    }

    let emailTest = await User.findOne({ email })
    if (emailTest) {
      const errorEmail = { message: 'E-Mail already exists' }
      return next({ status: 400, message: errorEmail.message })
    }
  } catch (err) {
    console.error(err)
    const error = { message: 'Unknown error!' }
    return next({ status: 400, message: error.message })
  }

  const newUser = { username, email, password, unwatchedMovies: [] }

  const salt = await bcrypt.genSalt(10)
  newUser.password = await bcrypt.hash(password, salt)

  User.create(newUser)
    .then(user =>
      response.status(201).json({
        username: user.username,
        email: user.email,
        _id: user._id,
        unwatchedMovies: user.unwatchedMovies,
      })
    )
    .catch(next)
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params

  User.findById(id)
    .then(data => {
      if (!data) {
        throw new Error('The user does not exist!')
      }
      response.status(200).json({
        id: data._id,
        username: data.username,
        email: data.email,
        unwatchedMovies: data.unwatchedMovies,
      })
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.patch('/unknownmovies/:id', async (request, response, next) => {
  const { id } = request.params
  const { firstMovie, secondMovie } = request.body

  if (firstMovie === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  try {
    const user = await User.findById(id)
    if (!user) {
      return next({ status: 404, message: 'User does not exist' })
    }

    const newUnwatchedMovies = user.unwatchedMovies
    if (!newUnwatchedMovies.includes(firstMovie)) {
      newUnwatchedMovies.push(firstMovie)
    }
    if (secondMovie !== '') {
      if (!newUnwatchedMovies.includes(secondMovie)) {
        newUnwatchedMovies.push(secondMovie)
      }
    }

    await User.findByIdAndUpdate(
      id,
      { unwatchedMovies: newUnwatchedMovies },
      { new: true }
    )

    response.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      unwatchedMovies: user.unwatchedMovies,
    })
  } catch (error) {
    console.error(error)
    return next({ status: 500, message: 'Server error' })
  }
})

router.patch('/:id', async (request, response, next) => {
  const { id } = request.params
  const { password } = request.body

  if (!password) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  const salt = await bcrypt.genSalt(10)
  newPassword = await bcrypt.hash(password, salt)

  User.findByIdAndUpdate(id, { password: newPassword }, { new: true })
    .then(user => {
      if (!user) {
        throw new Error('Could not change the password')
      }
      response.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        unwatchedMovies: user.unwatchedMovies,
      })
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.delete('/:id', (request, response, next) => {
  const { id } = request.params

  User.findByIdAndDelete(id)
    .then(user => {
      if (!user) {
        throw new Error('The user does not exist')
      }
      response.status(200).json(user)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

module.exports = router
