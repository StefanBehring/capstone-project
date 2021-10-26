import { useEffect, useState } from 'react'
import getUnwatchedMoviesByToken from '../services/getUnwatchedMoviesByToken'

const initialState = {
  infoData: [],
  isLoading: true,
  errorMessage: '',
}

const useUnwatchedMovies = () => {
  const [unwatchedMovies, setUnwatchedMovies] = useState(initialState)

  useEffect(() => {
    const fetchUnwatchedMovies = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('authToken'))

        if (!token) {
          throw new Error('no token')
        }

        const userUnwatchedMovies = await getUnwatchedMoviesByToken(token)

        const newUnwatchedMovies = {
          infoData: userUnwatchedMovies,
          isLoading: false,
          errorMessage: '',
        }
        setUnwatchedMovies(newUnwatchedMovies)
      } catch (error) {
        console.error(error)
        const newUnwatchedMovies = {
          infoData: [],
          isLoading: false,
          errorMessage: error.message,
        }
        setUnwatchedMovies(newUnwatchedMovies)
      }
    }

    fetchUnwatchedMovies()
  }, [])

  return unwatchedMovies
}

export default useUnwatchedMovies
