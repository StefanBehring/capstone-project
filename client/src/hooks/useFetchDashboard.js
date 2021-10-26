import { useEffect, useState } from 'react'
import getDashboardByToken from '../services/getDashboardByToken'

const initialState = {
  infoData: {},
  isLoading: true,
  errorMessage: '',
}

const useFetchDashboard = () => {
  const [dashboardData, setDashboardData] = useState(initialState)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('authToken'))

        if (token === '') {
          const newDashboard = {
            infoData: {},
            isLoading: false,
            errorMessage: '',
          }
          setDashboardData(newDashboard)
        } else {
          const config = {
            headers: {
              'x-auth-token': token,
            },
          }

          const user = await getDashboardByToken(config)

          const newDashboard = {
            infoData: user.data,
            isLoading: false,
            errorMessage: '',
          }
          setDashboardData(newDashboard)
        }
      } catch (error) {
        console.error(error)
        const newDashboard = {
          infoData: {},
          isLoading: false,
          errorMessage: error.message,
        }
        setDashboardData(newDashboard)
      }
    }

    fetchDashboard()
  }, [])

  return dashboardData
}

export default useFetchDashboard
