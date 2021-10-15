import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('renders', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    )

    const textHome = screen.getByText('Home')
    expect(textHome).toBeInTheDocument()

    const textVoting = screen.getByText('Voting')
    expect(textVoting).toBeInTheDocument()
  })
})
