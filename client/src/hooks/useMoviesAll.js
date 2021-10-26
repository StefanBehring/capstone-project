import { useEffect, useState } from 'react'
import getMoviesAll from '../services/getMoviesAll'

const initialState = { movies: [], isLoading: true }

const useMoviesAll = () => {
  const [moviesData, setMoviesData] = useState(initialState)

  useEffect(() => {
    async function fetchOwnData() {
      try {
        const responseData = await getMoviesAll()
        const newMovies = { movies: [...responseData], isLoading: false }
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

export default useMoviesAll
