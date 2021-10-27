import axios from 'axios'

const getMovieById = movieId => {
  return axios.get(`/api/movie/${movieId}`).then(response => response.data)
}

export default getMovieById
