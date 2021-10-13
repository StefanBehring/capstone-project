import styled from 'styled-components/macro'
import AddMovieForm from './components/AddMovieForm/AddMovieForm'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <AddMovieForm />
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
  background-color: var(--color-lila-light);
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
  margin: 0;
  overflow: auto;
`

export default App
