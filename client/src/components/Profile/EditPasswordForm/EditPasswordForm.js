import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components/macro'
import ButtonGreen from '../../Buttons/ButtonGreen/ButtonGreen'
import ErrorCard from '../../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../../Messages/LoadingSpinner/LoadingSpinner'

const EditPasswordForm = ({ onLogout }) => {
  const [userData, setUserData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordReType, setPasswordReType] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleChangeReType = event => {
    setPasswordReType(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    let isErrorInEdit = false
    if (password !== passwordReType) {
      isErrorInEdit = true
      setErrorMessage('Passwords do not match!')
    }

    if (!isErrorInEdit) {
      try {
        await axios.patch(`/api/users/${userData._id}`, { password })
        setIsSuccess(true)
      } catch (error) {
        console.error(error.message)
        setErrorMessage(`Could not edit the password.`)
      }
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('authToken'))

        if (token === '') {
          throw new Error({ message: 'Not logged in' })
        }

        const config = {
          headers: {
            'x-auth-token': token,
          },
        }

        const user = await axios.get('/api/auth', config)
        setUserData(user.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setErrorMessage({ message: error.message })
        setIsLoading(false)
        onLogout()
      }
    }

    if (isLoading) {
      fetchUser()
    }
  }, [isLoading, onLogout])

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isSuccess) {
    return <Redirect to="/profile" />
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Password</h2>
      {errorMessage && <ErrorCard title="Error" message={errorMessage} />}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        minLength="8"
        required
        onChange={handleChangePassword}
      />
      <label htmlFor="passwordretype">Re-Type Password</label>
      <input
        type="password"
        id="passwordretype"
        name="passwordretype"
        minLength="8"
        required
        onChange={handleChangeReType}
      />
      <ButtonGreen message="Edit" />
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

export default EditPasswordForm
