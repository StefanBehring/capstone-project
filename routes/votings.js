const express = require('express')
const Voting = require('../models/Voting')

const router = express.Router()

router.post('/', (request, response, next) => {
  const { user_id, first_movie_id, second_movie_id } = request.body

  if (user_id === '' || first_movie_id === '' || second_movie_id === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  const newVote = {
    user_id,
    first_movie_id,
    second_movie_id,
    isVoted: false,
  }

  Voting.create(newVote)
    .then(vote => response.status(201).json(vote))
    .catch(next)
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params

  Voting.findById(id)
    .then(data => {
      if (!data) {
        throw new Error('The vote does not exist!')
      }
      response.status(200).json(data)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.patch('/:id', (request, response, next) => {
  const { id } = request.params
  const { isCanceled, first_movie_won } = request.body

  if (!first_movie_won || !isCanceled) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  Voting.findByIdAndUpdate(
    id,
    { isVoted: true, isCanceled, first_movie_won },
    { new: true }
  )
    .then(user => {
      if (!user) {
        throw new Error('The voting does not exist')
      }
      response.status(200).json(user)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

module.exports = router
