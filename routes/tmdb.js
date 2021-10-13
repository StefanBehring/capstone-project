const express = require('express')
const axios = require('axios')

const router = express.Router()

const { TMDB_API_KEY } = process.env

router.get('/:id', async (request, response, next) => {
  const { id } = request.params

  try {
    const responseTmdb = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
    )
    const newMovie = {
      tmdbId: id,
      title: responseTmdb.data.original_title,
      year: responseTmdb.data.release_date.slice(0, 4),
      genre: responseTmdb.data.genres[0].name,
    }
    console.log(newMovie)
    return response.status(200).json(newMovie)
  } catch (error) {
    console.error(error)
    return response
      .status(404)
      .json({ message: 'Could not find the movie! ' + error.message })
  }
})

module.exports = router
