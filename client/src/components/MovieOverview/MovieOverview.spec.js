import { render, screen } from '@testing-library/react'
import MovieOverview from './MovieOverview'

xdescribe('MovieOverview', () => {
  it('renders', () => {
    render(<MovieOverview />)

    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()

    const movieCountText = screen.getByText(/\Moviecount:/)
    expect(movieCountText).toBeInTheDocument()
  })
})
