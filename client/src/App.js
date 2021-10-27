import styled from 'styled-components/macro'
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import saveToLocal from './lib/saveToLocal'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Voting from './components/Voting/Voting'
import Toplist from './components/Toplist/Toplist'
import RegisterAccountForm from './components/RegisterAccountForm/RegisterAccountForm'
import LoginForm from './components/LoginForm/LoginForm'
import Profile from './components/Profile/Profile'
import NotLoggedIn from './components/NotLoggedIn/NotLoggedIn'
import EditPasswordForm from './components/Profile/EditPasswordForm/EditPasswordForm'
import MovieOverview from './components/MovieOverview/MovieOverview'
import AddMovieForm from './components/AddMovieForm/AddMovieForm'
import RegisterSuccess from './components/RegisterSuccess/RegisterSuccess'
import Dashboard from './components/Dashboard/Dashboard'
import UnwatchedMoviesOverview from './components/UnwatchedMoviesOverview/UnwatchedMoviesOverview'
import ProtectedAdminRoute from './components/Routes/ProtectedAdminRoute/ProtectedAdminRoute'
import ProtectedUserRoute from './components/Routes/ProtectedUserRoute/ProtectedUserRoute'
import ProtectedRoute from './components/Routes/ProtectedRoute/ProtectedRoute'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const handleLogin = loginData => {
    const { token, isUserAdmin } = loginData
    saveToLocal('authToken', token)
    setIsLoggedIn(true)
    setIsAdmin(isUserAdmin)
  }

  const handleLogout = () => {
    saveToLocal('authToken', '')
    setIsLoggedIn(false)
    setIsAdmin(false)
  }

  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <ProtectedAdminRoute
              exact
              path="/add-new-movie"
              isAdmin={isAdmin}
              component={AddMovieForm}
            />
            <ProtectedAdminRoute
              exact
              path="/movie-overview"
              isAdmin={isAdmin}
              component={MovieOverview}
            />

            <ProtectedUserRoute
              exact
              path="/register-success"
              isLoggedIn={isLoggedIn}
              component={RegisterSuccess}
            />
            <ProtectedUserRoute
              exact
              path="/register"
              isLoggedIn={isLoggedIn}
              component={RegisterAccountForm}
            />
            <ProtectedUserRoute
              exact
              path="/login"
              isLoggedIn={isLoggedIn}
              component={LoginForm}
              onLogin={handleLogin}
            />

            <ProtectedRoute
              exact
              path="/unwatched-movies"
              isLoggedIn={isLoggedIn}
              component={UnwatchedMoviesOverview}
            />
            <ProtectedRoute
              exact
              path="/voting"
              isLoggedIn={isLoggedIn}
              component={Voting}
            />
            <ProtectedRoute
              exact
              path="/profile"
              isLoggedIn={isLoggedIn}
              component={Profile}
              onLogout={handleLogout}
            />
            <ProtectedRoute
              exact
              path="/edit-password"
              isLoggedIn={isLoggedIn}
              component={EditPasswordForm}
            />

            <Route exact path="/toplist">
              <Toplist />
            </Route>
            <Route exact path="/not-logged-in">
              <NotLoggedIn />
            </Route>

            <Route path={['/dashboard', '/home', '/']}>
              {isLoggedIn ? <Dashboard isAdmin={isAdmin} /> : <Home />}
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Wrapper>
    </Router>
  )
}

const Wrapper = styled.div`
  justify-self: center;
  display: grid;
  grid-template-rows: 50px auto 50px;
  height: 100vh;
  margin: 0 auto;
  max-width: 500px;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
  margin: 0;
  overflow: auto;
`

export default App
