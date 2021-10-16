import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import MovieCard from '../MovieCard/MovieCard'
import VotingArea from './VotingArea/VotingArea'

const Voting = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/api/movies/voting`)
        setMovies(response.data)
      } catch (error) {
        setMovies([
          {
            tmdbId: '550',
          },
          {
            tmdbId: '600',
          },
        ])
        console.error(error)
      }
    }

    if (movies.length < 2) fetchMovies()
  }, [movies])

  if (movies.length < 2) {
    return <Wrapper>Loading</Wrapper>
  }

  return (
    <Wrapper>
      <MovieCard tmdbId={movies[0].tmdbId} />
      <VotingArea />
      <MovieCard tmdbId={movies[1].tmdbId} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export default Voting
