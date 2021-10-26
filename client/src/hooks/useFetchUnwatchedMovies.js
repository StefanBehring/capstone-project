import { useEffect, useState } from 'react'
import getUnwatchedMoviesByToken from '../services/getUnwatchedMoviesByToken'

const initialState = {
  infoData: [],
  isLoading: true,
  errorMessage: '',
}

const useFetchUnwatchedMovies = () => {
  const [unwatchedMovies, setUnwatchedMovies] = useState(initialState)

  useEffect(() => {
    const fetchUnwatchedMovies = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('authToken'))

        if (!token) {
          throw new Error('no token')
        }

        const config = {
          headers: {
            'x-auth-token': token,
          },
        }

        const userUnwatchedMovies = await getUnwatchedMoviesByToken(config)

        const newUnwatchedMovies = {
          infoData: userUnwatchedMovies.data,
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

export default useFetchUnwatchedMovies
