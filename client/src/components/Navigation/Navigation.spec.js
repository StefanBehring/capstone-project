import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    const textToplist = screen.getByText('Toplist')
    expect(textToplist).toBeInTheDocument()

    const textProfile = screen.getByText('Profile')
    expect(textProfile).toBeInTheDocument()
  })

  it('has 4 links in it', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(4)
  })

  it('does NOT have class "is-active" on "Voting", "Toplist" and "Profile" when "Home" is clicked', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    const linkHome = linkElements[0]
    const linkVoting = linkElements[1]
    const linkToplist = linkElements[2]
    const linkProfile = linkElements[3]

    userEvent.click(linkHome)
    expect(linkVoting).not.toHaveClass('is-active')
    expect(linkToplist).not.toHaveClass('is-active')
    expect(linkProfile).not.toHaveClass('is-active')
  })

  it('does NOT have class "is-active" on "Home", "Toplist" and "Profile" when "Voting" is clicked', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    const linkHome = linkElements[0]
    const linkVoting = linkElements[1]
    const linkToplist = linkElements[2]
    const linkProfile = linkElements[3]

    userEvent.click(linkVoting)
    expect(linkHome).not.toHaveClass('is-active')
    expect(linkToplist).not.toHaveClass('is-active')
    expect(linkProfile).not.toHaveClass('is-active')
  })

  it('does NOT have class "is-active" on "Home", "Voting" and "Profile" when "Toplist" is clicked', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    const linkHome = linkElements[0]
    const linkVoting = linkElements[1]
    const linkToplist = linkElements[2]
    const linkProfile = linkElements[3]

    userEvent.click(linkToplist)
    expect(linkHome).not.toHaveClass('is-active')
    expect(linkVoting).not.toHaveClass('is-active')
    expect(linkProfile).not.toHaveClass('is-active')
  })

  it('does NOT have class "is-active" on "Home", "Voting" and "Toplist" when "Profile" is clicked', () => {
    render(
      <Router>
        <Navigation />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    const linkHome = linkElements[0]
    const linkVoting = linkElements[1]
    const linkToplist = linkElements[2]
    const linkProfile = linkElements[3]

    userEvent.click(linkProfile)
    expect(linkHome).not.toHaveClass('is-active')
    expect(linkVoting).not.toHaveClass('is-active')
    expect(linkToplist).not.toHaveClass('is-active')
  })
})
