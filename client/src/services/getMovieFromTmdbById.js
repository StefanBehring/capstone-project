import axios from 'axios'

const getMovieFromTmdbById = tmdbId => {
  return axios.get(`/api/tmdb/${tmdbId}`)
}

export default getMovieFromTmdbById
