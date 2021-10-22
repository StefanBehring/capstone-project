import axios from 'axios'

const patchUserUnknownMoviesByUserId = (userId, firstMovie, secondMovie) => {
  return axios.patch(`/api/users/unknownmovies/${userId}`, {
    firstMovie: firstMovie,
    secondMovie: secondMovie,
  })
}

export default patchUserUnknownMoviesByUserId
