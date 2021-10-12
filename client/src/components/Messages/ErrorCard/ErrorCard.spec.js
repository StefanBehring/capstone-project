import { render, screen } from '@testing-library/react'
import ErrorCard from './ErrorCard'

describe('ErrorCard', () => {
  it('renders', () => {
    const message = 'It was an error!'
    render(<ErrorCard title="Title" message={message} />)

    const h3Element = screen.getByRole('heading', { level: 3 })
    expect(h3Element).toBeInTheDocument()

    const textMessage = screen.getByText(message)
    expect(textMessage).toBeInTheDocument()
  })
})
