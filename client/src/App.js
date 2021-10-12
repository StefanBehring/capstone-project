import styled from 'styled-components/macro'
import ErrorCard from './components/ErrorCard/ErrorCard'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieCard from './components/MovieCard/MovieCard'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Home />
        <ErrorCard title="Error" message="message" />
        <MovieCard
          title="Fight Club"
          year="1999"
          genre="Drama"
          imgUrl="https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg"
        />
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
