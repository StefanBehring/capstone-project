import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import NotLoggedIn from './NotLoggedIn'

describe('NotLoggedIn', () => {
  it('renders', () => {
    render(
      <Router>
        <NotLoggedIn />
      </Router>
    )

    const headerElement = screen.getByRole('heading', { level: 2 })
    expect(headerElement).toBeInTheDocument()

    const text1 = screen.getByText(
      'In order to view this page you have to be logged in.'
    )
    expect(text1).toBeInTheDocument()

    const text2 = screen.getByText("Don't have an account yet?")
    expect(text2).toBeInTheDocument()

    const linkLogin = screen.getByText('Login')
    expect(linkLogin).toBeInTheDocument()

    const linkRegister = screen.getByText('Register now!')
    expect(linkRegister).toBeInTheDocument()
  })

  it('renders 1 header element', () => {
    render(
      <Router>
        <NotLoggedIn />
      </Router>
    )

    const headerElements = screen.getAllByRole('heading', { level: 2 })
    expect(headerElements).toHaveLength(1)
  })

  it('renders 2 link elements', () => {
    render(
      <Router>
        <NotLoggedIn />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(2)
  })
})
