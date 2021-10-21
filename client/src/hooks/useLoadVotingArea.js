import { useEffect, useState } from 'react'
import axios from 'axios'

const useLoadVotingArea = (firstMovieTmdbId, secondMovieTmdbId) => {
  const [movieData, setMovieData] = useState({
    firstMovie: '',
    secondMovie: '',
    isLoading: true,
    errorMessage: '',
  })

  useEffect(() => {
    const fetchMovies = async (firstTmdbId, secondTmdbId) => {
      try {
        const responseMovieOne = await axios.get(`/api/tmdb/${firstTmdbId}`)
        const responseMovieTwo = await axios.get(`/api/tmdb/${secondTmdbId}`)

        const newMoviesData = {
          firstMovie: responseMovieOne.data,
          secondMovie: responseMovieTwo.data,
          isLoading: false,
          errorMessage: '',
        }
        setMovieData(newMoviesData)
      } catch (error) {
        console.error(error)
        const newMoviesData = {
          firstMovie: '',
          secondMovie: '',
          isLoading: false,
          errorMessage: error.message,
        }
        setMovieData(newMoviesData)
      }
    }

    fetchMovies(firstMovieTmdbId, secondMovieTmdbId)
  }, [firstMovieTmdbId, secondMovieTmdbId])

  return movieData
}

export default useLoadVotingArea
