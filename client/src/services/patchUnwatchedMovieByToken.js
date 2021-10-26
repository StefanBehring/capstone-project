import axios from 'axios'
import generateConfig from '../lib/generateConfig'

const patchUnwatchedMovieByToken = (unwatchedMovieId, token) => {
  const config = generateConfig(token)

  const body = { unwatchedMovieId: unwatchedMovieId }

  return axios.patch('/api/unwatched-movies', body, config)
}

export default patchUnwatchedMovieByToken
