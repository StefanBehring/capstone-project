import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import NavBarLinkVoting from './NavBarLinkVoting'

describe('NavBarLinkVoting', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBarLinkVoting />
      </Router>
    )

    const text = screen.getByText('Voting')
    expect(text).toBeInTheDocument()
  })
})
