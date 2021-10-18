import { render, screen } from '@testing-library/react'

import RegisterAccountForm from './RegisterAccountForm'

describe('RegisterAccountForm', () => {
  it('renders', () => {
    render(<RegisterAccountForm />)

    const h2Element = screen.getAllByRole('heading', { level: 2 })
    expect(h2Element).toHaveLength(1)

    const textUsername = screen.getByText('Username')
    expect(textUsername).toBeInTheDocument()

    const textEmail = screen.getByText('E-Mail')
    expect(textEmail).toBeInTheDocument()

    const textPassword = screen.getByText('Password')
    expect(textPassword).toBeInTheDocument()

    const textReType = screen.getByText('Re-Type')
    expect(textReType).toBeInTheDocument()

    const buttonElement = screen.getAllByRole('button')
    expect(buttonElement).toHaveLength(1)
  })
})
