import axios from 'axios'

const postNewMovie = newMovie => {
  return axios.post(`/api/movie`, newMovie)
}

export default postNewMovie
