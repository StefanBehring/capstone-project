import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router'
import NavBarLinkProfile from './NavBarLinkProfile'

describe('NavBarLinkProfile', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBarLinkProfile />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  it('renders only 1 link element', () => {
    render(
      <Router>
        <NavBarLinkProfile />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders the text "Profile" one time', () => {
    render(
      <Router>
        <NavBarLinkProfile />
      </Router>
    )

    const textElements = screen.getAllByText('Profile')
    expect(textElements).toHaveLength(1)
  })

  it('changes to "is-active" when link is clicked', () => {
    render(
      <Router>
        <NavBarLinkProfile />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    userEvent.click(linkElement)
    expect(linkElement).toHaveClass('is-active')
  })
})
