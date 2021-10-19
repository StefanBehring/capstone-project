import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import SuccessCard from '../Messages/SuccessCard/SuccessCard'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChangeUsername = event => {
    setUsername(event.target.value)
  }

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios
      .post(`/api/auth`, { username, password })
      .then(res => {
        setSuccessMessage('User logged in!')
        if (errorMessage !== '') {
          setErrorMessage('')
        }
        event.target.reset()
      })
      .catch(error => {
        console.error(error.message)
        if (successMessage !== '') {
          setSuccessMessage('')
        }
        setErrorMessage(`Could not login user.`)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {successMessage && (
        <SuccessCard title="Success" message={successMessage} />
      )}
      {errorMessage && <ErrorCard title="Error" message={errorMessage} />}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="your username"
        required
        onChange={handleChangeUsername}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        minLength="8"
        required
        onChange={handleChangePassword}
      />
      <ButtonGreen message="Login" />
    </Form>
  )
}

const Form = styled.form`
  background-color: var(--color-white-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  padding: 0.5rem;
  width: 350px;

  h2 {
    text-align: center;
  }

  label {
    margin: 0.5rem 0 0;
  }
`

export default LoginForm