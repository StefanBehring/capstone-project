import { render, screen } from '@testing-library/react'

import RegisterAccountForm from './RegisterAccountForm'

describe('RegisterAccountForm', () => {
  it('renders', () => {
    render(<RegisterAccountForm />)

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

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders only 1 heading', () => {
    render(<RegisterAccountForm />)

    const h2element = screen.getAllByRole('heading', { level: 2 })
    expect(h2element).toHaveLength(1)
  })

  it('renders heading with text "Register Account"', () => {
    render(<RegisterAccountForm />)

    const h2element = screen.getByRole('heading', { level: 2 })
    expect(h2element).toHaveTextContent('Register Account')
  })

  it('has an input field "Username" with the type "text"', () => {
    render(<RegisterAccountForm />)

    const inputElement = screen.getByLabelText('Username')
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('has an input field "Username" which is "required"', () => {
    render(<RegisterAccountForm />)

    const inputElement = screen.getByLabelText('Username')
    expect(inputElement).toBeRequired()
  })

  it('has an input field "E-Mail" with the type "email"', () => {
    render(<RegisterAccountForm />)

    const inputElement = screen.getByLabelText('E-Mail')
    expect(inputElement).toHaveAttribute('type', 'email')
  })

  it('has an input field "E-Mail" which is "required"', () => {
    render(<RegisterAccountForm />)

    const inputElement = screen.getByLabelText('E-Mail')
    expect(inputElement).toBeRequired()
  })

  it('has an input field "Password" with the type "password"', () => {
    render(<RegisterAccountForm />)

    const inputElement = screen.getByLabelText('Password')
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  it('has an input field "Password" which is "required"', () => {
    render(<RegisterAccountForm />)

    const inputElement = screen.getByLabelText('Password')
    expect(inputElement).toBeRequired()
  })

  it('has an input field "Re-Type" with the type "password"', () => {
    render(<RegisterAccountForm />)

    const inputElement = screen.getByLabelText('Re-Type')
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  it('has an input field "Re-Type" which is "required"', () => {
    render(<RegisterAccountForm />)

    const inputElement = screen.getByLabelText('Re-Type')
    expect(inputElement).toBeRequired()
  })

  it('has 1 button element', () => {
    render(<RegisterAccountForm />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(1)
  })
})
