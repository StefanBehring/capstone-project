import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ButtonUnknown from './ButtonUnknown'

describe('ButtonUnknown', () => {
  it('renders', () => {
    const mockOnClick = jest.fn()
    render(
      <ButtonUnknown onUnknownMovieClick={mockOnClick} direction="direction" />
    )

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders only 1 button', () => {
    const mockOnClick = jest.fn()
    render(
      <ButtonUnknown onUnknownMovieClick={mockOnClick} direction="direction" />
    )

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(1)
  })

  it('has onClick functionality', () => {
    const mockOnClick = jest.fn()
    render(
      <ButtonUnknown onUnknownMovieClick={mockOnClick} direction="direction" />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('calls mockOnClick with "direction"', () => {
    const mockOnClick = jest.fn()
    render(
      <ButtonUnknown onUnknownMovieClick={mockOnClick} direction="direction" />
    )

    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockOnClick).toHaveBeenCalledWith('direction')
  })
})
