import { render, screen } from '@testing-library/react'
import ButtonBothUnknown from './ButtonBothUnknown'

describe('ButtonBothUnknown', () => {
  it('renders', () => {
    render(<ButtonBothUnknown />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})
