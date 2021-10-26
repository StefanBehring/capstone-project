import { useEffect, useState } from 'react'
import getMoviesAll from '../services/getMoviesAll'

const initialState = { movies: [], isLoading: true }

const useFetchMoviesAll = () => {
  const [moviesData, setMoviesData] = useState(initialState)

  useEffect(() => {
    async function fetchOwnData() {
      try {
        const response = await getMoviesAll()
        const newMovies = { movies: [...response.data], isLoading: false }
        setMoviesData(newMovies)
      } catch (error) {
        console.error(error)
        setMoviesData({
          movies: [],
          isLoading: false,
        })
      }
    }

    fetchOwnData()
  }, [])

  return moviesData
}

export default useFetchMoviesAll
