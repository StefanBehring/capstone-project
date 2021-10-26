import axios from 'axios'

const patchUnwatchedMovieByToken = (unwatchedMovieId, token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  }

  const body = { unwatchedMovieId: unwatchedMovieId }

  return axios.patch('/api/unwatched-movies', body, config)
}

export default patchUnwatchedMovieByToken
