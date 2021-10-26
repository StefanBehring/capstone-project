import axios from 'axios'

const getUnwatchedMoviesByToken = token => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  }

  return axios.get('/api/unwatched-movies', config)
}

export default getUnwatchedMoviesByToken
