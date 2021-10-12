import styled from 'styled-components/macro'

const Home = () => {
  return (
    <Wrapper>
      <h2>Welcome to rate the movie</h2>
      <p>
        On this app you will have the option to rate movies in a more accurate
        way then on other rating forms.
      </p>
      <p>Have fun!</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--color-yellow);
  border: 2px solid var(--color-lila);
  border-radius: 10px;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 340px;
`

export default Home
