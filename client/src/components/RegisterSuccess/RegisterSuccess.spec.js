import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import RegisterSuccess from './RegisterSuccess'

describe('RegisterSuccess', () => {
  it('renders', () => {
    render(
      <Router>
        <RegisterSuccess />
      </Router>
    )

    const header2Element = screen.getByRole('heading', { level: 2 })
    expect(header2Element).toBeInTheDocument()

    const header3Element = screen.getByRole('heading', { level: 3 })
    expect(header3Element).toBeInTheDocument()

    const text1 = screen.getByText('The registration is completed!')
    expect(text1).toBeInTheDocument()

    const text2 = screen.getByText('You can now login.')
    expect(text2).toBeInTheDocument()

    const linkLogin = screen.getByText('Login')
    expect(linkLogin).toBeInTheDocument()
  })

  it('renders 1 h2 header element', () => {
    render(
      <Router>
        <RegisterSuccess />
      </Router>
    )

    const headerElements = screen.getAllByRole('heading', { level: 2 })
    expect(headerElements).toHaveLength(1)
  })

  it('renders 1 h3 header element', () => {
    render(
      <Router>
        <RegisterSuccess />
      </Router>
    )

    const headerElements = screen.getAllByRole('heading', { level: 3 })
    expect(headerElements).toHaveLength(1)
  })

  it('renders 1 link element', () => {
    render(
      <Router>
        <RegisterSuccess />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })
})
