const express = require('express')
const User = require('../models/User')

const router = express.Router()

router.post('/', (request, response, next) => {
  const { username, email, password } = request.body

  if (username === '' || email === '' || password === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  const newUser = { username, email, password }

  User.create(newUser)
    .then(user => response.status(201).json(user))
    .catch(next)
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params

  User.findById(id)
    .then(data => {
      if (!data) {
        throw new Error('The user does not exist!')
      }
      response.status(200).json(data)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.patch('/:id', (request, response, next) => {
  const { id } = request.params
  const { password } = request.body

  if (!password) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  User.findByIdAndUpdate(id, { password }, { new: true })
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
