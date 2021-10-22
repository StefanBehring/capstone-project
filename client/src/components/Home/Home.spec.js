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
      'On this app you will have the option to rate movies in a more accurate way than on other rating forms.'
    )
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText('Have fun!')
    expect(text3).toBeInTheDocument()

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

    const headerElements = screen.getAllByRole('heading', { level: 2 })
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
