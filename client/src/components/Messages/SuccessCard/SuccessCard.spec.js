import { render, screen } from '@testing-library/react'
import SuccessCard from './SuccessCard'

describe('SuccessCard', () => {
  it('renders', () => {
    const message = 'It was a success!'
    render(<SuccessCard title="Title" message={message} />)

    const h3Element = screen.getByRole('heading', { level: 3 })
    expect(h3Element).toBeInTheDocument()

    const textMessage = screen.getByText(message)
    expect(textMessage).toBeInTheDocument()
  })
})
