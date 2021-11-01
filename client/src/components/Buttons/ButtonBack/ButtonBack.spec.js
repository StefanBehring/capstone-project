import { render, screen } from '@testing-library/react'
import ButtonBack from './ButtonBack'

describe('ButtonBack', () => {
  it('renders', () => {
    render(<ButtonBack />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders only 1 button', () => {
    render(<ButtonBack />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(1)
  })

  it('renders a button with text "Back"', () => {
    render(<ButtonBack />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent('Back')
  })
})
