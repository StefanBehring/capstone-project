import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'
import ButtonGreen from '../Buttons/ButtonGreen/ButtonGreen'
import LinkButtonRed from '../Buttons/LinkButtonRed/LinkButtonRed'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'

const Profile = ({ onLogout }) => {
  const [userData, setUserData] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

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

  if (errorMessage !== '') {
    return <ErrorCard title="Error" message={errorMessage} />
  }

  return (
    <Wrapper>
      <h2>Profile</h2>
      <p>{userData.username}</p>
      <p>{userData.email}</p>
      <Links>
        <LinkButtonBlue direction="/" message="Change Password" />
        <ButtonGreen message="Logout" onClickFunction={onLogout} />
        <LinkButtonRed direction="/" message="Delete Account" />
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
