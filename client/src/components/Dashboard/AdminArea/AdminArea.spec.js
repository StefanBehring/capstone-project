import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import AdminArea from './AdminArea'

describe('AdminArea', () => {
  it('renders', () => {
    render(
      <Router>
        <AdminArea />
      </Router>
    )

    const headerElement = screen.getByRole('heading', { level: 3 })
    expect(headerElement).toBeInTheDocument()

    const text = screen.getByText('Admin')
    expect(text).toBeInTheDocument()

    const linkAddNewMovie = screen.getByText('Add New Movie')
    expect(linkAddNewMovie).toBeInTheDocument()

    const linkMovieOverview = screen.getByText('View All Movies')
    expect(linkMovieOverview).toBeInTheDocument()
  })

  it('renders 1 h3 element', () => {
    render(
      <Router>
        <AdminArea />
      </Router>
    )

    const headerElements = screen.getAllByRole('heading', { level: 3 })
    expect(headerElements).toHaveLength(1)
  })

  it('renders 2 link elements', () => {
    render(
      <Router>
        <AdminArea />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(2)
  })
})
