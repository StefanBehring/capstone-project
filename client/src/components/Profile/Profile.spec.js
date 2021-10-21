import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Profile from './Profile'

describe('Profile', () => {
  it('renders', () => {
    const userData = {
      username: 'JohnDoe',
      email: 'johndoe@mail.com',
    }
    render(
      <Router>
        <Profile userData={userData} />
      </Router>
    )

    const h2elements = screen.getAllByRole('heading', { level: 2 })
    expect(h2elements).toHaveLength(1)

    const usernameText = screen.getByText(userData.username)
    expect(usernameText).toBeInTheDocument()

    const emailText = screen.getByText(userData.email)
    expect(emailText).toBeInTheDocument()

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(2)

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })
})
