import { useState } from 'react'
import Form from '../../styled/Form'
import H2 from '../../styled/H2'
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
    <Form onSubmit={addMovieHandler}>
      <H2>Add Movie</H2>
      <label htmlFor="tmdbId">TMDB Id</label>
      <input
        type="text"
        id="tmdbId"
        placeholder="Please enter a valid id"
        onChange={changeTmdbIdHandler}
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

export default AddMovieForm
