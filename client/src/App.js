import styled from 'styled-components/macro'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Voting from './components/Voting/Voting'
import Toplist from './components/Toplist/Toplist'
import RegisterAccountForm from './components/RegisterAccountForm/RegisterAccountForm'
import LoginForm from './components/LoginForm/LoginForm'
import Profile from './components/Profile/Profile'
import NotLoggedIn from './components/NotLoggedIn/NotLoggedIn'
import LocalStorageInit from './LocalStorage/LocalStorageInit'
import EditPasswordForm from './components/Profile/EditPasswordForm/EditPasswordForm'
import MovieOverview from './components/MovieOverview/MovieOverview'
import AddMovieForm from './components/AddMovieForm/AddMovieForm'
import RegisterSuccess from './components/RegisterSuccess/RegisterSuccess'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  LocalStorageInit(isLoggedIn)

  const handleLogin = loginData => {
    const { token, isUserAdmin } = loginData
    localStorage.setItem('authToken', JSON.stringify(token))
    setIsLoggedIn(true)
    setIsAdmin(isUserAdmin)
  }

  const handleLogout = () => {
    localStorage.setItem('authToken', JSON.stringify(''))
    setIsLoggedIn(false)
    setIsAdmin(false)
  }

  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/addNewMovie">
              {isAdmin ? <AddMovieForm /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/movieOverview">
              {isAdmin ? <MovieOverview /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/register-success">
              {isLoggedIn ? <Redirect to="/" /> : <RegisterSuccess />}
            </Route>
            <Route exact path="/register">
              {isLoggedIn ? <Redirect to="/" /> : <RegisterAccountForm />}
            </Route>
            <Route exact path="/login">
              {isLoggedIn ? (
                <Redirect to="/" />
              ) : (
                <LoginForm onLogin={handleLogin} />
              )}
            </Route>
            <Route exact path="/voting">
              {isLoggedIn ? <Voting /> : <Redirect to="/notLoggedIn" />}
            </Route>
            <Route exact path="/toplist">
              <Toplist />
            </Route>
            <Route exact path="/profile">
              {isLoggedIn ? (
                <Profile onLogout={handleLogout} />
              ) : (
                <Redirect to="/notLoggedIn" />
              )}
            </Route>
            <Route exact path="/editPassword">
              {isLoggedIn ? (
                <EditPasswordForm />
              ) : (
                <Redirect to="/notLoggedIn" />
              )}
            </Route>
            <Route exact path="/notLoggedIn">
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
