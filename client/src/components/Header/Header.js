import styled from 'styled-components/macro'

const Header = () => {
  return (
    <Wrapper>
      <h1>Rate The Movie</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: var(--color-primary-light);
  color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header
