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
        const responseData = await getMoviesTop()
        if (!Array.isArray(responseData)) {
          throw new Error('Invalid data')
        }
        const newMovieData = {
          movies: [...responseData],
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
