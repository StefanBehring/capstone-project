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
import LoadingSpinner from './components/Messages/LoadingSpinner/LoadingSpinner'
import Toplist from './components/Toplist/Toplist'
import RegisterAccountForm from './components/RegisterAccountForm/RegisterAccountForm'
import LoginForm from './components/LoginForm/LoginForm'
import Profile from './components/Profile/Profile'
import NotLoggedIn from './components/NotLoggedIn/NotLoggedIn'
import LocalStorageInit from './LocalStorage/LocalStorageInit'
import EditPasswordForm from './components/Profile/EditPasswordForm/EditPasswordForm'

function App() {
  LocalStorageInit()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = token => {
    localStorage.setItem('authToken', JSON.stringify(token))
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.setItem('authToken', JSON.stringify(''))
    setIsLoggedIn(false)
  }

  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
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
              {isLoggedIn ? <Voting /> : <Redirect to="/NotLoggedIn" />}
            </Route>
            <Route exact path="/toplist">
              <Toplist />
            </Route>
            <Route exact path="/profile">
              {isLoggedIn ? (
                <Profile onLogout={handleLogout} />
              ) : (
                <Redirect to="/NotLoggedIn" />
              )}
            </Route>
            <Route exact path="/editPassword">
              {isLoggedIn ? (
                <EditPasswordForm onLogout={handleLogout} />
              ) : (
                <Redirect to="/NotLoggedIn" />
              )}
            </Route>
            <Route exact path="/NotLoggedIn">
              <NotLoggedIn />
            </Route>
            <Route path={['/home', '/']}>
              <LoadingSpinner />
              <Home />
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
