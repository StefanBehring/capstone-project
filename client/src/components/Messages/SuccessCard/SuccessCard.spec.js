import { render, screen } from '@testing-library/react'
import SuccessCard from './SuccessCard'

describe('SuccessCard', () => {
  it('renders', () => {
    render(<SuccessCard title="Title" message="It was a success!" />)

    const h3Element = screen.getByRole('heading', { level: 3 })
    expect(h3Element).toBeInTheDocument()

    const textMessage = screen.getByText('It was a success!')
    expect(textMessage).toBeInTheDocument()
  })

  it('renders only 1 h3 element', () => {
    render(<SuccessCard title="Title" message="It was a success!" />)

    const h3Elements = screen.getAllByRole('heading', { level: 3 })
    expect(h3Elements).toHaveLength(1)
  })

  it('renders "Title" in the h3 element', () => {
    render(<SuccessCard title="Title" message="It was a success!" />)

    const h3Element = screen.getByRole('heading', { level: 3 })
    expect(h3Element).toHaveTextContent('Title')
  })
})
