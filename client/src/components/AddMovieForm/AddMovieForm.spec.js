import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddMovieForm from './AddMovieForm'

describe('AddMovieForm', () => {
  it('renders', () => {
    render(<AddMovieForm />)

    const h2element = screen.getByRole('heading', { level: 2 })
    expect(h2element).toBeInTheDocument()

    const labelItem = screen.getByLabelText('TMDB Id')
    expect(labelItem).toBeInTheDocument()

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  // Does not work yet:
  // Cannot find module '@testing-library/dom'
  // from 'node_modules/@testing-library/user-event/dist/click.js'
  it('has an onSubmit', () => {
    render(<AddMovieForm />)

    const mockOnSubmit = jest.fn()

    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    expect(mockOnSubmit).toHaveBeenCalled(1)
  })
})
