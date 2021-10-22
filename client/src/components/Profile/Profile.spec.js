import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router'
import Profile from './Profile'

describe('Profile', () => {
  it('renders', () => {
    const mockOnLogout = jest.fn()
    const userData = {
      username: 'JohnDoe',
      email: 'johndoe@mail.com',
    }
    render(
      <Router>
        <Profile userData={userData} onLogout={mockOnLogout} />
      </Router>
    )

    const h2element = screen.getByRole('heading', { level: 2 })
    expect(h2element).toBeInTheDocument()

    const usernameText = screen.getByText(userData.username)
    expect(usernameText).toBeInTheDocument()

    const emailText = screen.getByText(userData.email)
    expect(emailText).toBeInTheDocument()

    const linkChangePassword = screen.getByText('Change Password')
    expect(linkChangePassword).toBeInTheDocument()

    const buttonLogout = screen.getByText('Logout')
    expect(buttonLogout).toBeInTheDocument()

    const buttonDeleteAccount = screen.getByText('Delete Account')
    expect(buttonDeleteAccount).toBeInTheDocument()
  })

  it('renders 1 h2 element', () => {
    const mockOnLogout = jest.fn()
    const userData = {
      username: 'JohnDoe',
      email: 'johndoe@mail.com',
    }
    render(
      <Router>
        <Profile userData={userData} onLogout={mockOnLogout} />
      </Router>
    )

    const h2Elements = screen.getAllByRole('heading', { level: 2 })
    expect(h2Elements).toHaveLength(1)
  })

  it('renders 1 link element', () => {
    const mockOnLogout = jest.fn()
    const userData = {
      username: 'JohnDoe',
      email: 'johndoe@mail.com',
    }
    render(
      <Router>
        <Profile userData={userData} onLogout={mockOnLogout} />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders 2 button elements', () => {
    const mockOnLogout = jest.fn()
    const userData = {
      username: 'JohnDoe',
      email: 'johndoe@mail.com',
    }
    render(
      <Router>
        <Profile userData={userData} onLogout={mockOnLogout} />
      </Router>
    )

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(2)
  })

  it('calls mockOnLogout on Logout button click', () => {
    const mockOnLogout = jest.fn()
    const userData = {
      username: 'JohnDoe',
      email: 'johndoe@mail.com',
    }
    render(
      <Router>
        <Profile userData={userData} onLogout={mockOnLogout} />
      </Router>
    )

    const buttonLogout = screen.getByText('Logout')
    userEvent.click(buttonLogout)
    expect(mockOnLogout).toHaveBeenCalled()
  })
})
