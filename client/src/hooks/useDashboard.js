import { useEffect, useState } from 'react'
import loadFromLocal from '../lib/loadFromLocal'
import getDashboardByToken from '../services/getDashboardByToken'

const initialState = {
  moviesCount: 0,
  votingsCount: 0,
  unwatchedMoviesCount: 0,
  isLoading: true,
  errorMessage: '',
}

const useDashboard = () => {
  const [dashboardData, setDashboardData] = useState(initialState)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = loadFromLocal('authToken')

        if (!token) {
          throw new Error('no token')
        }

        const dashboard = await getDashboardByToken(token)

        const newDashboard = {
          moviesCount: dashboard.moviesCount,
          votingsCount: dashboard.votingsCount,
          unwatchedMoviesCount: dashboard.unwatchedMoviesCount,
          isLoading: false,
          errorMessage: '',
        }
        setDashboardData(newDashboard)
      } catch (error) {
        console.error(error)
        const newDashboard = {
          moviesCount: 0,
          votingsCount: 0,
          unwatchedMoviesCount: 0,
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
