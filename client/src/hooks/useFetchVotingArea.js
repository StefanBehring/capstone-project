import { useEffect, useState } from 'react'
import getMovieFromTmdbById from '../services/getMovieFromTmdbById'

const useFetchVotingArea = (firstMovieTmdbId, secondMovieTmdbId) => {
  const [movieData, setMovieData] = useState({
    firstMovie: '',
    secondMovie: '',
    isLoading: true,
    errorMessage: '',
  })

  useEffect(() => {
    const fetchMovies = async (firstTmdbId, secondTmdbId) => {
      try {
        const responseMovieOne = await getMovieFromTmdbById(firstTmdbId)
        const responseMovieTwo = await getMovieFromTmdbById(secondTmdbId)

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

export default useFetchVotingArea
