import { render, screen } from '@testing-library/react'
import EditPasswordForm from './EditPasswordForm'

describe('EditPasswordForm', () => {
  it('renders', () => {
    render(<EditPasswordForm />)

    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()

    const textPassword = screen.getByLabelText('Password')
    expect(textPassword).toBeInTheDocument()

    const textReTypePassword = screen.getByLabelText('Re-Type Password')
    expect(textReTypePassword).toBeInTheDocument()

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders only 1 heading', () => {
    render(<EditPasswordForm />)

    const h2element = screen.getAllByRole('heading', { level: 2 })
    expect(h2element).toHaveLength(1)
  })

  it('renders heading with text "Edit Password"', () => {
    render(<EditPasswordForm />)

    const h2element = screen.getByRole('heading', { level: 2 })
    expect(h2element).toHaveTextContent('Edit Password')
  })

  it('has an input field "Password" with the type "password"', () => {
    render(<EditPasswordForm />)

    const inputElement = screen.getByLabelText('Password')
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  it('has an input field "Password" which is "required"', () => {
    render(<EditPasswordForm />)

    const inputElement = screen.getByLabelText('Password')
    expect(inputElement).toBeRequired()
  })

  it('has an input field "Re-Type Password" with the type "password"', () => {
    render(<EditPasswordForm />)

    const inputElement = screen.getByLabelText('Re-Type Password')
    expect(inputElement).toHaveAttribute('type', 'password')
  })

  it('has an input field "Re-Type Password" which is "required"', () => {
    render(<EditPasswordForm />)

    const inputElement = screen.getByLabelText('Re-Type Password')
    expect(inputElement).toBeRequired()
  })

  it('has 1 button element', () => {
    render(<EditPasswordForm />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(1)
  })
})
