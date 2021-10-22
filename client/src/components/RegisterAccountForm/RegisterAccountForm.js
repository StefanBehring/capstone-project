import { useState } from 'react'
import styled from 'styled-components/macro'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import SuccessCard from '../Messages/SuccessCard/SuccessCard'
import postNewUser from '../../requests/postNewUser'

const RegisterAccountForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordReType, setPasswordReType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChangeUsername = event => {
    setUsername(event.target.value)
  }

  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleChangePasswordReType = event => {
    setPasswordReType(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    let isErrorInRegistration = false
    if (password !== passwordReType) {
      isErrorInRegistration = true
      if (successMessage !== '') {
        setSuccessMessage('')
      }
      setErrorMessage('Passwords do not match!')
    }

    if (!isErrorInRegistration) {
      postNewUser(username, email, password)
        .then(res => {
          setSuccessMessage('User was added!')
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
          setErrorMessage(`Could not add user.`)
        })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Register Account</h2>
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
      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="your email"
        required
        onChange={handleChangeEmail}
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
      <label htmlFor="passwordReType">Re-Type</label>
      <input
        type="password"
        id="passwordReType"
        name="passwordReType"
        minLength="8"
        required
        onChange={handleChangePasswordReType}
      />
      <ButtonGreen message="Register" />
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

export default RegisterAccountForm
