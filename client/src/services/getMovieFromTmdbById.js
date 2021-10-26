import axios from 'axios'

const getMovieFromTmdbById = tmdbId => {
  return axios.get(`/api/tmdb/${tmdbId}`).then(response => response.data)
}

export default getMovieFromTmdbById
