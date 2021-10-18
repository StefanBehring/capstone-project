import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import MovieCard from '../MovieCard/MovieCard'

const Toplist = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [componentError, setComponentError] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/api/movies/top`)
        setIsLoading(false)
        setMovies(response.data)
      } catch (error) {
        console.error(error)
        setIsLoading(false)
        setComponentError({ message: error.message })
      }
    }

    if (isLoading) fetchMovies()
  }, [isLoading])

  if (componentError !== '') {
    return <ErrorCard title="Error" message={componentError.message} />
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Wrapper>
      <h2>Toplist</h2>
      {movies.map((movie, index) => {
        return (
          <div>
            <Ranking>#{index + 1}</Ranking>
            <MovieCard key={movie._id} tmdbId={movie.tmdbId} />
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: var(--color-black);
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
`

const Ranking = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0.7rem auto 0.3rem;
`

export default Toplist
