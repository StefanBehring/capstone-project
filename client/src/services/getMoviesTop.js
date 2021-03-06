import axios from 'axios'

const getMoviesTop = () => {
  return axios
    .get(`/api/movies/?isToplist=true`)
    .then(response => response.data)
}

export default getMoviesTop
