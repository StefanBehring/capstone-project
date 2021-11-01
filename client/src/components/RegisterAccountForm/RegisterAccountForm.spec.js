import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'

import RegisterAccountForm from './RegisterAccountForm'

describe('RegisterAccountForm', () => {
  it('renders', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()

    const textUsername = screen.getByLabelText('Username')
    expect(textUsername).toBeInTheDocument()

    const textEmail = screen.getByLabelText('E-Mail')
    expect(textEmail).toBeInTheDocument()

    const textPassword = screen.getByLabelText('Password')
    expect(textPassword).toBeInTheDocument()

    const textReType = screen.getByLabelText('Re-Type')
    expect(textReType).toBeInTheDocument()

    const textQuestion = screen.getByText('Already have an account?')
    expect(textQuestion).toBeInTheDocument()

    const textLogin = screen.getByText('Login')
    expect(textLogin).toBeInTheDocument()
  })

  it('renders only 1 heading', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const h2element = screen.getAllByRole('heading', { level: 2 })
    expect(h2element).toHaveLength(1)
  })

  it('renders heading with text "Register Account"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const h2element = screen.getByRole('heading', { level: 2 })
    expect(h2element).toHaveTextContent('Register Account')
  })

  it('has an input field "Username" with the type "text"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const inputElement = screen.getByLabelText('Username')
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('has an input field "Username" which is "required"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const inputElement = screen.getByLabelText('Username')
    expect(inputElement).toBeRequired()
  })

  it('has an input field "E-Mail" with the type "email"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const inputElement = screen.getByLabelText('E-Mail')
    expect(inputElement).toHaveAttribute('type', 'email')
  })

  it('has an input field "E-Mail" which is "required"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const inputElement = screen.getByLabelText('E-Mail')
    expect(inputElement).toBeRequired()
  })

  it('has an input field "Password" with the type "password"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const inputElement = screen.getByLabelText('Password')
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  it('has an input field "Password" which is "required"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const inputElement = screen.getByLabelText('Password')
    expect(inputElement).toBeRequired()
  })

  it('has an input field "Re-Type" with the type "password"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const inputElement = screen.getByLabelText('Re-Type')
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  it('has an input field "Re-Type" which is "required"', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const inputElement = screen.getByLabelText('Re-Type')
    expect(inputElement).toBeRequired()
  })

  it('has 2 button elements', () => {
    render(
      <Router>
        <RegisterAccountForm />
      </Router>
    )

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(2)
  })
})
