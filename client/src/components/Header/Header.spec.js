import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(
      <Router>
        <Header />
      </Router>
    )

    const h1element = screen.getByRole('heading', { level: 1 })
    expect(h1element).toBeInTheDocument()
  })

  it('renders only 1 heading', () => {
    render(
      <Router>
        <Header />
      </Router>
    )

    const headingElements = screen.getAllByRole('heading', { level: 1 })
    expect(headingElements).toHaveLength(1)
  })
})
