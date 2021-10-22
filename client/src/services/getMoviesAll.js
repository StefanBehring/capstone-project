import axios from 'axios'

const getMoviesAll = () => {
  return axios.get('/api/movies/all')
}

export default getMoviesAll
