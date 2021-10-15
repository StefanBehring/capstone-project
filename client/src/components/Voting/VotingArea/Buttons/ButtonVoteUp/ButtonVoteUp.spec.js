import { render, screen } from '@testing-library/react'
import ButtonVoteUp from './ButtonVoteUp'

describe('ButtonVoteUp', () => {
  it('renders', () => {
    render(<ButtonVoteUp />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})
