import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import MovieCard from '../MovieCard/MovieCard'

const MovieOverview = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchOwnData() {
      try {
        const response = await axios.get('/api/movies/all')
        setMovies([...response.data])
      } catch (error) {
        console.error(error)
        setMovies([
          {
            tmdbId: 550,
          },
          {
            tmdbId: 580,
          },
          {
            tmdbId: 600,
          },
        ])
      }
    }
    if (movies.length === 0) fetchOwnData()
  }, [movies])

  return (
    <Wrapper>
      <h2>Movie Overview</h2>
      <MovieCount>Moviecount: {movies.length}</MovieCount>
      {movies.map(movie => (
        <MovieCard key={movie.tmdbId} tmdbId={movie.tmdbId} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0.5rem auto;
  }
`

const MovieCount = styled.p`
  margin: 0.5rem auto 0;
`

export default MovieOverview
