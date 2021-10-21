import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchMoviesAll = () => {
  const [moviesData, setMoviesData] = useState({ movies: [], isLoading: true })

  useEffect(() => {
    async function fetchOwnData() {
      try {
        const response = await axios.get('/api/movies/all')
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
