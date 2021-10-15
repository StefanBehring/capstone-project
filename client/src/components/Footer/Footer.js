import styled from 'styled-components/macro'
import Navigation from '../Navigation/Navigation'

const Footer = () => {
  return (
    <Wrapper>
      <Navigation />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: var(--color-grey-light);
  color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Footer
