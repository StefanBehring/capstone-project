import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchUser = () => {
  const [userData, setUserData] = useState({
    userData: {},
    isLoggedIn: false,
    isLoading: true,
    errorMessage: '',
  })

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
        const newUser = {
          userData: user.data,
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

export default useFetchUser
