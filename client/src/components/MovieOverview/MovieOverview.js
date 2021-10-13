import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import MovieCard from '../MovieCard/MovieCard'

const MovieOverview = () => {
  const [movies, setMovies] = useState([
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

  useEffect(() => {
    async function fetchOwnData() {
      try {
        const response = await axios.get('/api/movies/all')
        console.log(response)
        const dataOwnApi = response.data

        setMovies(
          dataOwnApi.map(item => {
            return {
              id: item._id,
              imgUrl:
                'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
              title: item._id,
              year: '1999',
              genre: 'Drama',
            }
          })
        )

        for (const el of dataOwnApi) {
          const resTmdb = await axios.get('/api/movies/all')

          setMovies(
            dataOwnApi.map(ele => {
              return {
                id: ele._id,
                imgUrl:
                  'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
                title: el._id === ele._id ? 'Prcoessed' : ele._id,
                year: '1999',
                genre: 'Drama',
              }
            })
          )
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchOwnData()
  }, [])

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
