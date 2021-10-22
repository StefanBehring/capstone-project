import { useState } from 'react'
import styled from 'styled-components/macro'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import SuccessCard from '../Messages/SuccessCard/SuccessCard'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import postNewMovie from '../../services/postNewMovie'

const AddMovieForm = () => {
  const [tmdbId, setTmdbId] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const addMovieHandler = event => {
    event.preventDefault()

    const newMovie = {
      tmdbId: tmdbId,
    }

    postNewMovie(newMovie)
      .then(res => {
        setSuccessMessage('Movie was added!')
        setErrorMessage('')
        event.target.reset()
      })
      .catch(error => {
        console.error(error.message)
        setSuccessMessage('')
        setErrorMessage(`Could not add the movie: ${error.message}`)
      })

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
        required
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
  background-color: var(--color-white-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-black);
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
