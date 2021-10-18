import { useState } from 'react'
import styled from 'styled-components/macro'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'

const RegisterAccountForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordReType, setPasswordReType] = useState('')
  const [errorRegister, setErrorRegister] = useState('')

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
    /*
    The alerts (and this comment) will be removed; they are just here for testing and giving some feedback
    */
    event.preventDefault()
    alert(
      `SUBMIT WAS INITIATED\n${username}\n${email}\n${password}\n${passwordReType}`
    )
    let isErrorInRegistration = false
    if (password !== passwordReType) {
      isErrorInRegistration = true
      setErrorRegister('Passwords do not match!')
      alert('Passwords do not match')
    }

    if (!isErrorInRegistration) {
      alert('SUCCESS!')
      event.target.reset()
      if (errorRegister !== '') setErrorRegister('')
    }
  }

  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <h2>Register Account</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="your username"
        required
        onChange={event => handleChangeUsername(event)}
      />
      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="your email"
        required
        onChange={event => handleChangeEmail(event)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        minLength="8"
        required
        onChange={event => handleChangePassword(event)}
      />
      <label htmlFor="passwordReType">Re-Type</label>
      <input
        type="password"
        id="passwordReType"
        name="passwordReType"
        minLength="8"
        required
        onChange={event => handleChangePasswordReType(event)}
      />
      <ButtonGreen message="Register" />
      {errorRegister !== '' ? (
        <ErrorCard title="Error" message={errorRegister} />
      ) : (
        ''
      )}
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
