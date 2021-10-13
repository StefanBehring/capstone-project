import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'

const MovieCard = ({ tmdbId }) => {
  const [movie, setMovie] = useState({
    tmdbId: '550',
    imgUrl: 'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
    title: 'Fight Club',
    year: '1999',
    genre: 'Drama',
  })

  useEffect(() => {
    const fetchMovie = async id => {
      try {
        const response = await axios.get(`/api/tmdb/${id}`)
        setMovie(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchMovie(tmdbId)
  })

  return (
    <Wrapper>
      <img src={movie.imgUrl} alt="" height="562" width="375" />
      <h3>{movie.title}</h3>
      <p>
        {movie.year} - {movie.genre}
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--color-yellow);
  border-radius: 10px;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem auto;
  padding: 0.5rem;
  width: 340px;

  img {
    height: 200px;
    width: 133px;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`

export default MovieCard
