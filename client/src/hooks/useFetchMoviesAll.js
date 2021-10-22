import { useEffect, useState } from 'react'
import getMoviesAll from '../services/getMoviesAll'

const useFetchMoviesAll = () => {
  const [moviesData, setMoviesData] = useState({ movies: [], isLoading: true })

  useEffect(() => {
    async function fetchOwnData() {
      try {
        const response = await getMoviesAll()
        const newMovies = { movies: [...response.data], isLoading: false }
        setMoviesData(newMovies)
      } catch (error) {
        console.error(error)
        setMoviesData({
          movies: [
            {
              tmdbId: 550,
            },
            {
              tmdbId: 580,
            },
            {
              tmdbId: 600,
            },
          ],
          isLoading: false,
        })
      }
    }

    fetchOwnData()
  }, [])

  return moviesData
}

export default useFetchMoviesAll
