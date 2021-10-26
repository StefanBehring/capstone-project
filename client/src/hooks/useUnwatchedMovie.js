import { useEffect, useState } from 'react'
import getMovieById from '../services/getMovieById'

const initialState = {
  infoData: {},
  isLoading: true,
  errorMessage: '',
}

const useUnwatchedMovie = unwatchedMovieId => {
  const [unwatchedMovie, setUnwatchedMovie] = useState(initialState)

  useEffect(() => {
    const fetchUnwatchedMovie = async unwatchedMovieId => {
      try {
        const unwatchedMovieData = await getMovieById(unwatchedMovieId)

        const newUnwatchedMovie = {
          infoData: unwatchedMovieData,
          isLoading: false,
          errorMessage: '',
        }
        setUnwatchedMovie(newUnwatchedMovie)
      } catch (error) {
        console.error(error)
        const newUnwatchedMovie = {
          infoData: {},
          isLoading: false,
          errorMessage: error.message,
        }
        setUnwatchedMovie(newUnwatchedMovie)
      }
    }

    fetchUnwatchedMovie(unwatchedMovieId)
  }, [unwatchedMovieId])

  return unwatchedMovie
}

export default useUnwatchedMovie
