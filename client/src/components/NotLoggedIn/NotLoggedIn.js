import styled from 'styled-components/macro'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'

const NotLoggedIn = () => {
  return (
    <Wrapper>
      <h2>Not logged in</h2>
      <p>In order to view this page you have to be logged in.</p>
      <LinkButtonBlue message="Login" direction="/login" />
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

export default NotLoggedIn
