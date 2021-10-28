import styled from 'styled-components/macro'

const HeaderWrapper = styled.header`
  background-color: var(--color-primary-light);
  color: var(--color-black);
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    margin: 0;
    padding: 0;
    height: 50px;
    width: auto;
  }
`

export default HeaderWrapper
