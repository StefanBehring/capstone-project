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

    const headerElement = screen.getAllByRole('heading', { level: 2 })
    expect(headerElement).toHaveLength(1)

    const text1 = screen.getByText(
      'In order to view this page you have to be logged in.'
    )
    expect(text1).toBeInTheDocument()

    const text2 = screen.getByText("Don't have an account yet?")
    expect(text2).toBeInTheDocument()

    const linkElement = screen.getAllByRole('link')
    expect(linkElement).toHaveLength(2)
  })
})
