import axios from 'axios'

const getMoviesTop = () => {
  return axios.get(`/api/movies/top`)
}

export default getMoviesTop
