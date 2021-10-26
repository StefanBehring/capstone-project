import { useEffect, useState } from 'react'
import getMovieFromTmdbById from '../services/getMovieFromTmdbById'

const initialState = {
  tmdbId: '550',
  imgUrl: 'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
  title: 'Currently loading data',
  year: '1999',
  genre: 'Drama',
  isLoading: true,
}

const useMovieFromTmdb = tmdbId => {
  const [movie, setMovie] = useState(initialState)

  useEffect(() => {
    const fetchMovie = async id => {
      try {
        const movieData = await getMovieFromTmdbById(id)
        let newMovie = movieData
        newMovie.isLoading = false
        setMovie(newMovie)
      } catch (error) {
        setMovie({
          tmdbId: '550',
          imgUrl:
            'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
          title: 'Fight Club',
          year: '1999',
          genre: 'Drama',
          isLoading: false,
        })
        console.error(error)
      }
    }

    fetchMovie(tmdbId)
  }, [tmdbId])

  return movie
}

export default useMovieFromTmdb
