import styled from 'styled-components/macro'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Voting from './components/Voting/Voting'
import LoadingSpinner from './components/Messages/LoadingSpinner/LoadingSpinner'
import Toplist from './components/Toplist/Toplist'
import RegisterAccountForm from './components/RegisterAccountForm/RegisterAccountForm'

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/register">
              <RegisterAccountForm />
            </Route>
            <Route exact path="/voting">
              <Voting />
            </Route>
            <Route exact path="/toplist">
              <Toplist />
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
