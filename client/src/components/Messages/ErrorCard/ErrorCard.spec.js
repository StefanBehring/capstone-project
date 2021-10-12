import { render, screen } from '@testing-library/react'
import ErrorCard from './ErrorCard'

describe('ErrorCard', () => {
  it('renders', () => {
    const title = 'Title'
    const message = 'Message'
    render(<ErrorCard title={title} message={message} />)

    const h3Element = screen.getByRole('heading')
    expect(h3Element).toBeInTheDocument()

    const textTitle = screen.getByText(title)
    expect(textTitle).toBeInTheDocument()

    const textMessage = screen.getByText(message)
    expect(textMessage).toBeInTheDocument()
  })
})
