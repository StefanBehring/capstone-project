import styled from 'styled-components/macro'

const Form = styled.form`
  background-color: var(--color-primary-dark);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-primary-light);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 340px;

  label {
    padding: 0.5rem 0.8rem;
  }

  input {
    background-color: var(--color-primary-light);
    color: var(--color-primary-heavy);
    padding: 0.5rem 0.8rem;
  }
`

export default Form
