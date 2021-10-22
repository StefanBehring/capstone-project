import { render, screen } from '@testing-library/react'

import MovieCard from './MovieCard'

describe('MovieCard', () => {
  it('renders', async () => {
    render(<MovieCard tmdbId="550" />)

    const h3Element = await screen.findAllByRole('heading', { level: 3 })
    expect(h3Element).toHaveLength(1)

    const imgElement = screen.getByAltText('')
    expect(imgElement).toBeInTheDocument()

    const textTitle = screen.getByText('Jaws: The Revenge')
    expect(textTitle).toBeInTheDocument()

    const textYear = screen.getByText('1987')
    expect(textYear).toBeInTheDocument()

    const textGenre = screen.getByText('Adventure')
    expect(textGenre).toBeInTheDocument()
  })
})
