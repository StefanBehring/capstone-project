import { useEffect, useState } from 'react'
import getUserByToken from '../services/getUserByToken'

const initialState = {
  userData: {},
  isLoggedIn: false,
  isLoading: true,
  errorMessage: '',
}

const useFetchUser = () => {
  const [userData, setUserData] = useState(initialState)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('authToken'))

        if (token === '') {
          const newUser = {
            userData: {},
            isLoggedIn: false,
            isLoading: false,
            errorMessage: '',
          }
          setUserData(newUser)
        } else {
          const config = {
            headers: {
              'x-auth-token': token,
            },
          }

          const user = await getUserByToken(config)

          const newUser = {
            userData: user.data,
            isLoggedIn: true,
            isLoading: false,
            errorMessage: '',
          }
          setUserData(newUser)
        }
      } catch (error) {
        console.error(error)
        const newUser = {
          userData: {},
          isLoggedIn: false,
          isLoading: false,
          errorMessage: error.message,
        }
        setUserData(newUser)
      }
    }

    fetchUser()
  }, [])

  return userData
}

export default useFetchUser
