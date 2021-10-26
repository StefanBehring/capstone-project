import axios from 'axios'

const getMovieById = movieId => {
  return axios.get(`/api/movies/${movieId}`)
}

export default getMovieById
