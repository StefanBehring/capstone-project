import { render, screen } from '@testing-library/react'
import ButtonGreen from './ButtonGreen'

describe('ButtonGreen', () => {
  it('renders', () => {
    const message = 'Add movie'
    render(<ButtonGreen message={message} />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})
