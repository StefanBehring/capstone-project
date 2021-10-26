import { useEffect, useState } from 'react'
import loadFromLocal from '../lib/loadFromLocal'
import getUserByToken from '../services/getUserByToken'

const initialState = {
  userData: {},
  isLoggedIn: false,
  isLoading: true,
  errorMessage: '',
}

const useUser = () => {
  const [userData, setUserData] = useState(initialState)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = loadFromLocal('authToken')

        if (!token) {
          throw new Error('no token')
        }

        const user = await getUserByToken(token)

        const newUser = {
          userData: user,
          isLoggedIn: true,
          isLoading: false,
          errorMessage: '',
        }
        setUserData(newUser)
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

export default useUser
