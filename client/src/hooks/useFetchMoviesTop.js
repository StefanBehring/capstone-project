import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchMoviesTop = () => {
  const [movieData, setMovieData] = useState({
    movies: [],
    isLoading: true,
    errorMessage: '',
  })

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/api/movies/top`)
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

export default useFetchMoviesTop
