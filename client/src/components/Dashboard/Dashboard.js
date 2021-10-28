import { Redirect } from 'react-router'
import ComponentsWrapper from '../../styled/ComponentsWrapper'
import H2 from '../../styled/H2'
import H3 from '../../styled/H3'
import ParagraphCenter from '../../styled/ParagraphCenter'
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
        <H2>Dashboard</H2>
        <ParagraphCenter>Movies: {dashboardData.moviesCount}</ParagraphCenter>
        <ParagraphCenter>Votings: {dashboardData.votingsCount}</ParagraphCenter>
      </CardWrapper>
      <CardWrapper>
        <H3>Unwatched Movies</H3>
        <ParagraphCenter>
          On your list: {dashboardData.unwatchedMoviesCount}
        </ParagraphCenter>
        <LinkButtonBlue message="Overview" direction="/unwatched-movies" />
      </CardWrapper>
      {isAdmin && <AdminArea />}
    </ComponentsWrapper>
  )
}

export default Dashboard
