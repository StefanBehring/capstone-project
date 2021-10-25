import axios from 'axios'

const patchUnwatchedMovieByToken = (unwatchedMovieId, config) => {
  return axios.patch(`/api/unwatched-movies/${unwatchedMovieId}`, null, config)
}

export default patchUnwatchedMovieByToken
