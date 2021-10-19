import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Profile from './Profile'

describe('Profile', () => {
  it('renders', () => {
    render(
      <Router>
        <Profile />
      </Router>
    )

    const h2element = screen.getAllByRole('heading', { level: 2 })
    expect(h2element).toHaveLength(1)

    const usernameText = screen.getByText('JohnDoe')
    expect(usernameText).toBeInTheDocument()

    const emailText = screen.getByText('johndoe@mail.com')
    expect(emailText).toBeInTheDocument()

    const linkElement = screen.getAllByRole('link')
    expect(linkElement).toHaveLength(3)
  })
})
