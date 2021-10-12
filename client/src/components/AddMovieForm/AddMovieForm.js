import { useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import SuccessCard from '../Messages/SuccessCard/SuccessCard'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'

const AddMovieForm = () => {
  const [tmdbId, setTmdbId] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // Comments will be deleted later on
  /*
    The function has to be async, because it has to wait for the response of the tmdb api in the try catch block.
    Once it has an response, the response can be positive or negative.
    If the response is positive we allow (allowPostMovie) the movie to be posted to our database.
    If the response is negative we set an error message.
  */
  const addMovieHandler = async event => {
    event.preventDefault()
    event.target.reset()

    const newMovie = {
      tmdb_id: tmdbId,
    }

    let allowPostMovie = false

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=7a72c13d262ed45c671611991b0f6086`
      )
      if (response.status === 200) {
        allowPostMovie = true
      } else {
        setSuccessMessage('')
        setErrorMessage('Unknown error connecting to tmdb')
      }
    } catch (error) {
      console.error(error)
      setSuccessMessage('')
      setErrorMessage('Movie does not exist on tmdb!')
    }

    if (allowPostMovie) {
      axios
        .post(`http://localhost:4000/api/movies`, newMovie)
        .then(res => {
          console.log(res.data)
          setSuccessMessage('Movie was added!')
          setErrorMessage('')
        })
        .catch(error => {
          console.error(error.message)
          setSuccessMessage('')
          setErrorMessage('Could not add the movie!')
        })
    }

    setTmdbId('')
  }

  const changeTmdbIdHandler = event => {
    setTmdbId(event.target.value)
  }

  return (
    <Form onSubmit={event => addMovieHandler(event)}>
      <h2>Add Movie</h2>
      <label htmlFor="tmdbId">TMDB Id</label>
      <input
        type="text"
        id="tmdbId"
        placeholder="Please enter a valid id"
        onChange={event => changeTmdbIdHandler(event)}
      />
      <ButtonGreen message="Add Movie" />
      {successMessage && (
        <SuccessCard title="Success" message={successMessage} />
      )}
      {errorMessage && <ErrorCard title="Error" message={errorMessage} />}
    </Form>
  )
}

const Form = styled.form`
  background-color: var(--color-yellow);
  border-radius: 10px;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 340px;

  h2 {
    margin: 0;
  }

  label {
    padding: 0.5rem 0.8rem;
  }

  input {
    padding: 0.5rem 0.8rem;
  }
`

export default AddMovieForm
