import { Redirect } from 'react-router'
import ComponentsWrapper from '../../styled/ComponentsWrapper'
import CardWrapper from '../../styled/CardWrapper'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'
import AdminArea from './AdminArea/AdminArea'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import useDashboard from '../../hooks/useDashboard'

const Dashboard = ({ isAdmin }) => {
  const dashboardData = useDashboard()

  if (dashboardData.isLoading) {
    return <LoadingSpinner />
  }

  if (dashboardData.errorMessage !== '') {
    return <Redirect to="/not-logged-in" />
  }

  return (
    <ComponentsWrapper>
      <CardWrapper>
        <h2>Dashboard</h2>
        <p>Movies: {dashboardData.moviesCount}</p>
        <p>Votings: {dashboardData.votingsCount}</p>
      </CardWrapper>
      <CardWrapper>
        <h3>Unwatched Movies</h3>
        <p>On your list: {dashboardData.unwatchedMoviesCount}</p>
        <LinkButtonBlue message="Overview" direction="/unwatched-movies" />
      </CardWrapper>
      {isAdmin && <AdminArea />}
    </ComponentsWrapper>
  )
}

export default Dashboard
