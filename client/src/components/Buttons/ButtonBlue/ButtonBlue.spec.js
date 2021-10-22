import { render, screen } from '@testing-library/react'
import ButtonBlue from './ButtonBlue'

describe('ButtonBlue', () => {
  it('renders', () => {
    render(<ButtonBlue message="Register now" />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders only 1 button', () => {
    render(<ButtonBlue message="Register now" />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(1)
  })

  it('renders a button with text "Register now"', () => {
    render(<ButtonBlue message="Register now" />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent('Register now')
  })
})
