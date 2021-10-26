import { useEffect, useState } from 'react'
import getMoviesTop from '../services/getMoviesTop'

const initialState = {
  movies: [],
  isLoading: true,
  errorMessage: '',
}

const useMoviesTop = () => {
  const [movieData, setMovieData] = useState(initialState)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviesTop()
        if (!Array.isArray(response.data)) {
          throw new Error('Invalid data')
        }
        const newMovieData = {
          movies: [...response.data],
          isLoading: false,
          errorMessage: '',
        }
        setMovieData(newMovieData)
      } catch (error) {
        console.error(error)
        const newMovieData = {
          movies: [],
          isLoading: false,
          errorMessage: error.message,
        }
        setMovieData(newMovieData)
      }
    }

    fetchMovies()
  }, [])

  return movieData
}

export default useMoviesTop
