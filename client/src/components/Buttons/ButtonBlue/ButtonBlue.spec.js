import { render, screen } from '@testing-library/react'
import ButtonBlue from './ButtonBlue'

describe('ButtonBlue', () => {
  it('renders', () => {
    render(<ButtonBlue message="Register now" />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})
