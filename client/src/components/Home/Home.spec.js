import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Home from './Home'

describe('Home', () => {
  it('renders', () => {
    render(
      <Router>
        <Home />
      </Router>
    )

    const headerElement = screen.getByRole('heading', { level: 2 })
    expect(headerElement).toBeInTheDocument()

    const text2 = screen.getByText(
      'On this app you will have the option to rate movies.'
    )
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText(
      "You don't do it in the typical 5-star fashion way. You decide which movie you like more!"
    )
    expect(text3).toBeInTheDocument()

    const text4 = screen.getByText(
      'This way we get a way better understanding of which one really is the best movie.'
    )
    expect(text4).toBeInTheDocument()

    const text5 = screen.getByText('Have fun!')
    expect(text5).toBeInTheDocument()

    const text6 = screen.getByText("Don't have an account yet?")
    expect(text6).toBeInTheDocument()

    const linkLogin = screen.getByText('Login')
    expect(linkLogin).toBeInTheDocument()

    const linkRegister = screen.getByText('Register now!')
    expect(linkRegister).toBeInTheDocument()
  })

  it('renders 1 header element', () => {
    render(
      <Router>
        <Home />
      </Router>
    )

    const headerElements = screen.getAllByRole('heading')
    expect(headerElements).toHaveLength(1)
  })

  it('renders 2 link elements', () => {
    render(
      <Router>
        <Home />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(2)
  })
})
