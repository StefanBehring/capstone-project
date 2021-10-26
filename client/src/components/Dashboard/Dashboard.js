import styled from 'styled-components/macro'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'
import AdminArea from './AdminArea/AdminArea'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import useFetchDashboard from '../../hooks/useFetchDashboard'
import { Redirect } from 'react-router'

const Dashboard = ({ isAdmin }) => {
  const dashboardData = useFetchDashboard()

  if (dashboardData.isLoading) {
    return <LoadingSpinner />
  }

  if (dashboardData.errorMessage !== '') {
    return <Redirect to="/not-logged-in" />
  }

  return (
    <DashboardWrapper>
      <Wrapper>
        <h2>Dashboard</h2>
        <p>Movies: {dashboardData.infoData.moviesCount}</p>
        <p>Votings: {dashboardData.infoData.votingsCount}</p>
      </Wrapper>
      <Wrapper>
        <h3>Unwatched Movies</h3>
        <p>On your list: {dashboardData.infoData.unwatchedMoviesCount}</p>
        <LinkButtonBlue message="Overview" direction="/unwatched-movies" />
      </Wrapper>
      {isAdmin && <AdminArea />}
    </DashboardWrapper>
  )
}

const DashboardWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

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
`

export default Dashboard
