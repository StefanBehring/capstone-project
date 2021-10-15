import styled from 'styled-components/macro'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Voting from './components/Voting/Voting'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Voting />
      </Main>
      <Footer />
    </Wrapper>
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
