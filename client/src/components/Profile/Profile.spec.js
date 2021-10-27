import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router'
import Profile from './Profile'

describe('Profile', () => {
  xit('renders', async () => {
    const mockOnLogout = jest.fn()
    const userData = {
      _id: '61669b0f5642db42d61f716b',
      username: 'JohnDoe',
      email: 'johndoe@mail.com',
      isAdmin: false,
    }

    render(
      <Router>
        <Profile onLogout={mockOnLogout} />
      </Router>
    )

    const h2element = await screen.findByRole('heading', { level: 2 })
    expect(h2element).toBeInTheDocument()

    const usernameText = await screen.findByText(userData.username)
    expect(usernameText).toBeInTheDocument()

    const emailText = await screen.findByText(userData.email)
    expect(emailText).toBeInTheDocument()

    const linkChangePassword = await screen.findByText('Change Password')
    expect(linkChangePassword).toBeInTheDocument()

    const buttonLogout = await screen.findByText('Logout')
    expect(buttonLogout).toBeInTheDocument()

    const buttonDeleteAccount = await screen.findByText('Delete Account')
    expect(buttonDeleteAccount).toBeInTheDocument()
  })

  it('renders 1 h2 element', async () => {
    const mockOnLogout = jest.fn()

    render(
      <Router>
        <Profile onLogout={mockOnLogout} />
      </Router>
    )

    const h2Elements = await screen.findAllByRole('heading', { level: 2 })
    expect(h2Elements).toHaveLength(1)
  })

  it('renders 1 link element', async () => {
    const mockOnLogout = jest.fn()

    render(
      <Router>
        <Profile onLogout={mockOnLogout} />
      </Router>
    )

    const linkElements = await screen.findAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders 2 button elements', async () => {
    const mockOnLogout = jest.fn()
    const userData = {
      _id: '61669b0f5642db42d61f716b',
      username: 'JohnDoe',
      email: 'johndoe@mail.com',
      isAdmin: false,
    }

    render(
      <Router>
        <Profile onLogout={mockOnLogout} />
      </Router>
    )

    const buttonElements = await screen.findAllByRole('button')
    expect(buttonElements).toHaveLength(2)
  })

  it('calls mockOnLogout on Logout button click', async () => {
    const mockOnLogout = jest.fn()

    render(
      <Router>
        <Profile onLogout={mockOnLogout} />
      </Router>
    )

    const buttonLogout = await screen.findByText('Logout')
    userEvent.click(buttonLogout)
    expect(mockOnLogout).toHaveBeenCalled()
  })
})
