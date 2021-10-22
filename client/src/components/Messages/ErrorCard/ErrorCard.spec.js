import { render, screen } from '@testing-library/react'
import ErrorCard from './ErrorCard'

describe('ErrorCard', () => {
  it('renders', () => {
    render(<ErrorCard title="Title" message="It was an error!" />)

    const h3Element = screen.getByRole('heading', { level: 3 })
    expect(h3Element).toBeInTheDocument()

    const textMessage = screen.getByText('It was an error!')
    expect(textMessage).toBeInTheDocument()
  })

  it('renders only 1 h3 element', () => {
    render(<ErrorCard title="Title" message="It was an error!" />)

    const h3Elements = screen.getAllByRole('heading', { level: 3 })
    expect(h3Elements).toHaveLength(1)
  })

  it('renders "Title" in the h3 element', () => {
    render(<ErrorCard title="Title" message="It was an error!" />)

    const h3Element = screen.getByRole('heading', { level: 3 })
    expect(h3Element).toHaveTextContent('Title')
  })
})
