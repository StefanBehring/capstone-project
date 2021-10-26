import axios from 'axios'
import generateConfig from '../lib/generateConfig'

const getUnwatchedMoviesByToken = token => {
  const config = generateConfig(token)

  return axios
    .get('/api/unwatched-movies', config)
    .then(response => response.data)
}

export default getUnwatchedMoviesByToken
