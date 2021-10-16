import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonVoteUp from './ButtonVoteUp'

describe('ButtonVoteUp', () => {
  it('renders', () => {
    const mockOnClick = jest.fn()
    render(<ButtonVoteUp onVoteClick={mockOnClick} />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('has onClick functionality', () => {
    const mockOnClick = jest.fn()
    render(<ButtonVoteUp onVoteClick={mockOnClick} />)

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
