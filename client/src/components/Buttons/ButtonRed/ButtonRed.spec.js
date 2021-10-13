import { render, screen } from '@testing-library/react'
import ButtonRed from './ButtonRed'

describe('ButtonRed', () => {
  it('renders', () => {
    render(<ButtonRed message="Delete movie" />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})
