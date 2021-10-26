import axios from 'axios'

const patchUserUnknownMoviesByUserId = (userId, firstMovie, secondMovie) => {
  const body = {
    firstMovie: firstMovie,
    secondMovie: secondMovie,
  }

  return axios.patch(`/api/users/unknownmovies/${userId}`, body)
}

export default patchUserUnknownMoviesByUserId
