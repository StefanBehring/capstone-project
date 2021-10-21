import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonVoteDown from './ButtonVoteDown'

describe('ButtonVoteDown', () => {
  it('renders', () => {
    const mockOnClick = jest.fn()
    render(<ButtonVoteDown onVoteClick={mockOnClick} />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders only 1 button', () => {
    const mockOnClick = jest.fn()
    render(<ButtonVoteDown onVoteClick={mockOnClick} />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(1)
  })

  it('has onClick functionality', () => {
    const mockOnClick = jest.fn()
    render(<ButtonVoteDown onVoteClick={mockOnClick} />)

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockOnClick).toHaveBeenCalled()
  })
})
