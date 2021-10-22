import { render, screen } from '@testing-library/react'

import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('renders', () => {
    render(<LoginForm />)

    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()

    const textUsername = screen.getByLabelText('Username')
    expect(textUsername).toBeInTheDocument()

    const textPassword = screen.getByLabelText('Password')
    expect(textPassword).toBeInTheDocument()

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders only 1 h2 element', () => {
    render(<LoginForm />)

    const h2Elements = screen.getAllByRole('heading', { level: 2 })
    expect(h2Elements).toHaveLength(1)
  })

  it('renders "Login" for the h2 element', () => {
    render(<LoginForm />)

    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toHaveTextContent('Login')
  })

  it('has an input field "Username" with the type "text"', () => {
    render(<LoginForm />)

    const inputElement = screen.getByLabelText('Username')
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('has an input field "Username" which is "required"', () => {
    render(<LoginForm />)

    const inputElement = screen.getByLabelText('Username')
    expect(inputElement).toBeRequired()
  })

  it('has an input field "Password" with the type "password"', () => {
    render(<LoginForm />)

    const inputElement = screen.getByLabelText('Password')
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  it('has an input field "Password" which is "required"', () => {
    render(<LoginForm />)

    const inputElement = screen.getByLabelText('Password')
    expect(inputElement).toBeRequired()
  })

  it('renders only 1 button element', () => {
    render(<LoginForm />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(1)
  })

  it('renders "Login" for the button element', () => {
    render(<LoginForm />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent('Login')
  })
})
