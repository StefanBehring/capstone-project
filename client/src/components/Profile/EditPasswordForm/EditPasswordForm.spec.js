import { render, screen } from '@testing-library/react'

import EditPasswordForm from './EditPasswordForm'

describe('EditPasswordForm', () => {
  it('renders', () => {
    render(<EditPasswordForm />)

    const h2Element = screen.getAllByRole('heading', { level: 2 })
    expect(h2Element).toHaveLength(1)

    const textPassword = screen.getByLabelText('Password')
    expect(textPassword).toBeInTheDocument()

    const textReTypePassword = screen.getByLabelText('Re-Type Password')
    expect(textReTypePassword).toBeInTheDocument()

    const buttonElement = screen.getAllByRole('button')
    expect(buttonElement).toHaveLength(1)
  })
})
