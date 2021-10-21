import { render, screen } from '@testing-library/react'
import ButtonGreen from './ButtonGreen'

describe('ButtonGreen', () => {
  it('renders', () => {
    render(<ButtonGreen message="Add movie" />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders only 1 button', () => {
    render(<ButtonGreen message="Register now" />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(1)
  })
})
