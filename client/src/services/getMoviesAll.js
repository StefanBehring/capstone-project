import axios from 'axios'

const getMoviesAll = () => {
  return axios.get('/api/movies').then(response => response.data)
}

export default getMoviesAll
