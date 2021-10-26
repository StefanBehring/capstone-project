import { useEffect, useState } from 'react'
import getDashboardByToken from '../services/getDashboardByToken'

const initialState = {
  infoData: {},
  isLoading: true,
  errorMessage: '',
}

const useDashboard = () => {
  const [dashboardData, setDashboardData] = useState(initialState)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = JSON.parse(localStorage.getItem('authToken'))

        if (!token) {
          throw new Error('no token')
        }

        const user = await getDashboardByToken(token)

        const newDashboard = {
          infoData: user,
          isLoading: false,
          errorMessage: '',
        }
        setDashboardData(newDashboard)
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

export default useDashboard
