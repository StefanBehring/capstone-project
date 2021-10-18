const express = require('express')
const Voting = require('../models/Voting')

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
  const { isCanceled, firstMovieWon } = request.body

  if (firstMovieWon === undefined || isCanceled === undefined) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  Voting.findByIdAndUpdate(
    id,
    { isVoted: true, isCanceled, firstMovieWon },
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
