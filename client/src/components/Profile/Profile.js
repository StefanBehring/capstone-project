import { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import H2 from '../../styled/H2'
import CardWrapper from '../../styled/CardWrapper'
import ParagraphCenter from '../../styled/ParagraphCenter'
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
    <CardWrapper>
      <H2>Profile</H2>
      <ParagraphCenter>{userData.username}</ParagraphCenter>
      <ParagraphCenter>{userData.email}</ParagraphCenter>
      <Links>
        <LinkButtonBlue direction="/edit-password" message="Change Password" />
        <ButtonGreen message="Logout" onClickFunction={handleLogout} />
        <ButtonRed message="Delete Account" onClickFunction={handleDelete} />
      </Links>
    </CardWrapper>
  )
}

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 260px;
  width: 100%;
`

export default Profile
