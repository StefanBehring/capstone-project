import styled from 'styled-components/macro'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Home />
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
  margin: 0;
  width: 375px;
`

const Main = styled.main`
  background-color: var(--color-lila-light);
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
  margin: 0;
  overflow: auto;
`

export default App
