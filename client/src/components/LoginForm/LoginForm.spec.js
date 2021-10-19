import { render, screen } from '@testing-library/react'

import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('renders', () => {
    render(<LoginForm />)

    const h2Element = screen.getAllByRole('heading', { level: 2 })
    expect(h2Element).toHaveLength(1)

    const textUsername = screen.getByLabelText('Username')
    expect(textUsername).toBeInTheDocument()

    const textPassword = screen.getByLabelText('Password')
    expect(textPassword).toBeInTheDocument()

    const buttonElement = screen.getAllByRole('button')
    expect(buttonElement).toHaveLength(1)
  })
})
