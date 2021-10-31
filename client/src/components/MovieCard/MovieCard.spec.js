import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'

import MovieCard from './MovieCard'

describe('MovieCard', () => {
  it('renders', async () => {
    render(
      <Router>
        <MovieCard tmdbId="550" />
      </Router>
    )

    const h3Element = await screen.findByRole('heading', { level: 3 })
    expect(h3Element).toBeInTheDocument()

    const imgElement = screen.getByAltText('')
    expect(imgElement).toBeInTheDocument()

    const textTitle = screen.getByText('Jaws: The Revenge')
    expect(textTitle).toBeInTheDocument()

    const textYear = screen.getByText('1987')
    expect(textYear).toBeInTheDocument()

    const textGenre = screen.getByText('Adventure')
    expect(textGenre).toBeInTheDocument()
  })

  it('renders 1 h3 element', async () => {
    render(
      <Router>
        <MovieCard tmdbId="550" />
      </Router>
    )

    const h3Elements = await screen.findAllByRole('heading', { level: 3 })
    expect(h3Elements).toHaveLength(1)
  })

  it('renders 1 img element', async () => {
    render(
      <Router>
        <MovieCard tmdbId="550" />
      </Router>
    )

    const imgElements = await screen.findAllByRole('img')
    expect(imgElements).toHaveLength(1)
  })
})
