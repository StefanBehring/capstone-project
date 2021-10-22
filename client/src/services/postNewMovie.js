import axios from 'axios'

const postNewMovie = newMovie => {
  return axios.post(`/api/movies`, newMovie)
}

export default postNewMovie
