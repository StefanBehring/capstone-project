import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Form from '../../styled/Form'
import H2 from '../../styled/H2'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import SuccessCard from '../Messages/SuccessCard/SuccessCard'
import postNewUser from '../../services/postNewUser'
import ParagraphCenter from '../../styled/ParagraphCenter'
import CardWrapper from '../../styled/CardWrapper'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'
import ButtonBack from '../Buttons/ButtonBack/ButtonBack'

const RegisterAccountForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordReType, setPasswordReType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState(false)

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
      setErrorMessage('Passwords do not match!')
    }

    if (!isErrorInRegistration) {
      postNewUser(username, email, password)
        .then(res => {
          if (errorMessage !== '') {
            setErrorMessage('')
          }
          event.target.reset()
          setSuccessMessage(true)
        })
        .catch(error => {
          console.error(error.message)
          setErrorMessage(`Could not add user.`)
        })
    }
  }

  if (successMessage) {
    return <Redirect to="/register-success" />
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <H2>Register Account</H2>
        {successMessage && (
          <SuccessCard title="Success" message={successMessage} />
        )}
        {errorMessage && <ErrorCard title="Error" message={errorMessage} />}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          minLength="6"
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
      <CardWrapper>
        <ParagraphCenter>Already have an account?</ParagraphCenter>
        <LinkButtonBlue direction="/login" message="Login" />
        <ButtonBack />
      </CardWrapper>
    </>
  )
}

export default RegisterAccountForm
