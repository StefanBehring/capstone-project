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
})
