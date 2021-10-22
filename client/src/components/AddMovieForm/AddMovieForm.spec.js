import { render, screen } from '@testing-library/react'
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

  it('renders heading with text "Add Movie"', () => {
    render(<AddMovieForm />)

    const h2element = screen.getByRole('heading', { level: 2 })
    expect(h2element).toHaveTextContent('Add Movie')
  })

  it('renders only 1 heading', () => {
    render(<AddMovieForm />)

    const h2element = screen.getAllByRole('heading', { level: 2 })
    expect(h2element).toHaveLength(1)
  })

  it('has an input field "TMDB Id" with the type "text"', () => {
    render(<AddMovieForm />)

    const inputElement = screen.getByLabelText('TMDB Id')
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('has an input field "TMDB Id" which is "required"', () => {
    render(<AddMovieForm />)

    const inputElement = screen.getByLabelText('TMDB Id')
    expect(inputElement).toBeRequired()
  })
})
