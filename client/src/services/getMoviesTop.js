import axios from 'axios'

const getMoviesTop = () => {
  return axios.get(`/api/movies/top`).then(response => response.data)
}

export default getMoviesTop
