import axios from 'axios'

const getMoviesAll = () => {
  return axios.get('/api/movies/all').then(response => response.data)
}

export default getMoviesAll
