import styled from 'styled-components/macro'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'

const Home = () => {
  return (
    <Wrapper>
      <h2>Welcome to rate the movie</h2>
      <p>
        On this app you will have the option to rate movies in a more accurate
        way than on other rating forms.
      </p>
      <p>Have fun!</p>
      <p>Don't have an account yet?</p>
      <LinkButtonBlue message="Register now!" direction="/register" />
    </Wrapper>
  )
}

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

export default Home
