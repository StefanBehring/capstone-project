import { render, screen } from '@testing-library/react'
import ButtonUnknown from './ButtonUnknown'

describe('ButtonUnknown', () => {
  it('renders', () => {
    render(<ButtonUnknown />)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })
})
