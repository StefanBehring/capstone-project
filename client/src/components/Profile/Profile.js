import { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import ButtonRed from '../Buttons/ButtonRed/ButtonRed'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import deleteUserById from '../../services/deleteUserById'
import useUser from '../../hooks/useUser'

const Profile = ({ onLogout }) => {
  let history = useHistory()
  const user = useUser()
  const userData = user.userData

  const [errorComponent, setErrorComponent] = useState('')

  const handleLogout = () => {
    onLogout()
    history.push('/')
  }

  const handleDelete = async () => {
    try {
      await deleteUserById(userData._id)
      onLogout()
      history.push('/')
    } catch (error) {
      console.error(error)
      setErrorComponent(error.message)
      onLogout()
      history.push('/')
    }
  }

  if (errorComponent !== '') {
    onLogout()
    return <ErrorCard title="Error" message={errorComponent} />
  }

  if (user.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Wrapper>
      <h2>Profile</h2>
      <p>{userData.username}</p>
      <p>{userData.email}</p>
      <Links>
        <LinkButtonBlue direction="/edit-password" message="Change Password" />
        <ButtonGreen message="Logout" onClickFunction={handleLogout} />
        <ButtonRed message="Delete Account" onClickFunction={handleDelete} />
      </Links>
    </Wrapper>
  )
}

const Wrapper = styled.section`
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

  p {
    margin: 0 auto 0.5rem;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`

export default Profile
