import { useState } from 'react'
import styled from 'styled-components/macro'
import MovieCard from '../MovieCard/MovieCard'

const MovieOverview = () => {
  const [movies] = useState([
    {
      id: 0,
      imgUrl: 'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
      title: 'Fight Club',
      year: '1999',
      genre: 'Drama',
    },
    {
      id: 1,
      imgUrl: 'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
      title: 'Fight Club',
      year: '1999',
      genre: 'Drama',
    },
    {
      id: 2,
      imgUrl: 'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
      title: 'Fight Club',
      year: '1999',
      genre: 'Drama',
    },
  ])

  return (
    <Wrapper>
      <h2>Movie Overview</h2>
      <MovieCount>Moviecount: {movies.length}</MovieCount>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          imgUrl={movie.imgUrl}
          title={movie.title}
          year={movie.year}
          genre={movie.genre}
        />
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
