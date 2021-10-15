import { render, screen } from '@testing-library/react'
import ButtonVoteDown from './ButtonVoteDown'

describe('ButtonVoteDown', () => {
  it('renders', () => {
    render(<ButtonVoteDown />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})
