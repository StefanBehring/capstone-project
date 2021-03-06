import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Form from '../../../styled/Form'
import H2 from '../../../styled/H2'
import ButtonGreen from '../../Buttons/ButtonGreen/ButtonGreen'
import ErrorCard from '../../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../../Messages/LoadingSpinner/LoadingSpinner'
import patchUserPassword from '../../../services/patchUserPassword'
import useUser from '../../../hooks/useUser'

const EditPasswordForm = () => {
  const user = useUser()
  const userData = user.userData

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
        await patchUserPassword(userData._id, password)
        setIsSuccess(true)
      } catch (error) {
        console.error(error.message)
        setErrorMessage(`Could not edit the password.`)
      }
    }
  }

  if (isSuccess) {
    return <Redirect to="/profile" />
  }

  if (user.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Form onSubmit={handleSubmit}>
      <H2>Edit Password</H2>
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

export default EditPasswordForm
