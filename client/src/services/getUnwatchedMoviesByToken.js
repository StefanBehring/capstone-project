import axios from 'axios'

const getUnwatchedMoviesByToken = config => {
  return axios.get('/api/unwatched-movies', config)
}

export default getUnwatchedMoviesByToken
