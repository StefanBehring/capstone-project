import axios from 'axios'

const patchUnwatchedMovieByToken = (unwatchedMovieId, token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  }

  return axios.patch(`/api/unwatched-movies/${unwatchedMovieId}`, null, config)
}

export default patchUnwatchedMovieByToken
