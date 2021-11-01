import { useState } from 'react'
import { useHistory } from 'react-router'
import Form from '../../styled/Form'
import H2 from '../../styled/H2'
import postAuthForLogin from '../../services/postAuthForLogin'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import CardWrapper from '../../styled/CardWrapper'
import ParagraphCenter from '../../styled/ParagraphCenter'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'
import ButtonBack from '../Buttons/ButtonBack/ButtonBack'

const LoginForm = ({ onLogin }) => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChangeUsername = event => {
    setUsername(event.target.value)
  }

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    postAuthForLogin(username, password)
      .then(res => {
        onLogin(res.data)
        if (errorMessage !== '') {
          setErrorMessage('')
        }
        event.target.reset()
        history.push('/dashboard')
      })
      .catch(error => {
        console.error(error.message)
        setErrorMessage(`Could not login user.`)
      })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <H2>Login</H2>
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
      <CardWrapper>
        <ParagraphCenter>Don't have an account?</ParagraphCenter>
        <LinkButtonBlue direction="/register" message="Register" />
        <ButtonBack />
      </CardWrapper>
    </>
  )
}

export default LoginForm
