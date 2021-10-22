import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router'
import NavBarLinkVoting from './NavBarLinkVoting'

describe('NavBarLinkVoting', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBarLinkVoting />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  it('renders only 1 link element', () => {
    render(
      <Router>
        <NavBarLinkVoting />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders the text "Voting" one time', () => {
    render(
      <Router>
        <NavBarLinkVoting />
      </Router>
    )

    const textElements = screen.getAllByText('Voting')
    expect(textElements).toHaveLength(1)
  })

  it('changes to "is-active" when link is clicked', () => {
    render(
      <Router>
        <NavBarLinkVoting />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    userEvent.click(linkElement)
    expect(linkElement).toHaveClass('is-active')
  })
})
