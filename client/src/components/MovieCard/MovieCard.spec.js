import { render, screen } from '@testing-library/react'
import MovieCard from './MovieCard'

describe('MovieCard', () => {
  it('renders', () => {
    render(<MovieCard tmdbId="550" />)

    const h3Element = screen.getByRole('heading', { level: 3 })
    expect(h3Element).toBeInTheDocument()

    const imgElement = screen.getByAltText('')
    expect(imgElement).toBeInTheDocument()

    const textTitle = screen.getByText('Currently loading data')
    expect(textTitle).toBeInTheDocument()

    const textParagraph = screen.getByText('1999 - Drama')
    expect(textParagraph).toBeInTheDocument()
  })
})
