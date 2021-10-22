import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Footer from './Footer'

describe('Footer', () => {
  it('renders', () => {
    render(
      <Router>
        <Footer />
      </Router>
    )

    const textHome = screen.getByText('Home')
    expect(textHome).toBeInTheDocument()

    const textVoting = screen.getByText('Voting')
    expect(textVoting).toBeInTheDocument()

    const textToplist = screen.getByText('Toplist')
    expect(textToplist).toBeInTheDocument()

    const textProfile = screen.getByText('Profile')
    expect(textProfile).toBeInTheDocument()
  })
})
