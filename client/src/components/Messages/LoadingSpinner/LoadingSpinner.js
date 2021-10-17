import { keyframes } from 'styled-components'
import styled from 'styled-components/macro'

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Spinner>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </Spinner>
    </Wrapper>
  )
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const grow = keyframes`
  50% {
    transform: scale(1);
  }
`

const Wrapper = styled.div`
  height: 100px;
  margin: 1.5rem auto;
`

const Spinner = styled.div`
  animation: ${rotate} 3s linear infinite;
  height: 50px;
  transform-origin: bottom center;
`

const Circle = styled.div`
  animation: ${grow} 1.5s linear infinite;
  background-color: var(--color-primary-dark);
  border-radius: 50%;
  display: inline-block;
  margin: -10px;
  height: 40px;
  width: 40px;
  transform: scale(0);

  &:nth-of-type(2) {
    animation-delay: 0.75s;
    background-color: var(--color-primary-light);
  }
`

export default LoadingSpinner
