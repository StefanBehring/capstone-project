import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    const h1element = screen.getByRole('heading', { level: 1 })
    expect(h1element).toBeInTheDocument()
  })

  it('renders the text "Rate The Movie"', () => {
    render(<Header />)

    const h1element = screen.getByRole('heading', { level: 1 })
    expect(h1element).toHaveTextContent('Rate The Movie')
  })

  it('renders only 1 heading', () => {
    render(<Header />)

    const headingElements = screen.getAllByRole('heading')
    expect(headingElements).toHaveLength(1)
  })
})
