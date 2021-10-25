import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
  it('renders', async () => {
    const isAdmin = false

    render(
      <Router>
        <Dashboard isAdmin={isAdmin} />
      </Router>
    )

    const h2Element = await screen.findByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()

    const h3Element = await screen.findByRole('heading', { level: 3 })
    expect(h3Element).toBeInTheDocument()

    const textDashboard = await screen.findByText('Dashboard')
    expect(textDashboard).toBeInTheDocument()

    const textMovies = await screen.findByText(/\Movies:/)
    expect(textMovies).toBeInTheDocument()

    const textVotings = await screen.findByText(/\Votings:/)
    expect(textVotings).toBeInTheDocument()

    const textOnYourList = await screen.findByText(/\On your list:/)
    expect(textOnYourList).toBeInTheDocument()

    const linkOverview = await screen.findByText('Overview')
    expect(linkOverview).toBeInTheDocument()
  })

  it('renders 1 h2 element', async () => {
    const isAdmin = false

    render(
      <Router>
        <Dashboard isAdmin={isAdmin} />
      </Router>
    )

    const headerElements = await screen.findAllByRole('heading', { level: 2 })
    expect(headerElements).toHaveLength(1)
  })

  it('renders 1 h3 element', async () => {
    const isAdmin = false

    render(
      <Router>
        <Dashboard isAdmin={isAdmin} />
      </Router>
    )

    const headerElements = await screen.findAllByRole('heading', { level: 3 })
    expect(headerElements).toHaveLength(1)
  })

  it('renders 1 link elements', async () => {
    const isAdmin = false

    render(
      <Router>
        <Dashboard isAdmin={isAdmin} />
      </Router>
    )

    const linkElements = await screen.findAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders if user is admin', async () => {
    const isAdmin = true

    render(
      <Router>
        <Dashboard isAdmin={isAdmin} />
      </Router>
    )

    const h2Element = await screen.findByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()

    const textDashboard = await screen.findByText('Dashboard')
    expect(textDashboard).toBeInTheDocument()

    const textMovies = await screen.findByText(/\Movies:/)
    expect(textMovies).toBeInTheDocument()

    const textVotings = await screen.findByText(/\Votings:/)
    expect(textVotings).toBeInTheDocument()

    const textOnYourList = await screen.findByText(/\On your list:/)
    expect(textOnYourList).toBeInTheDocument()

    const textAdmin = await screen.findByText('Admin')
    expect(textAdmin).toBeInTheDocument()

    const linkOverview = await screen.findByText('Overview')
    expect(linkOverview).toBeInTheDocument()

    const linkAddNewMovie = await screen.findByText('Add New Movie')
    expect(linkAddNewMovie).toBeInTheDocument()

    const linkMovieOverview = await screen.findByText('View All Movies')
    expect(linkMovieOverview).toBeInTheDocument()
  })

  it('renders 2 h3 element if user is admin', async () => {
    const isAdmin = true

    render(
      <Router>
        <Dashboard isAdmin={isAdmin} />
      </Router>
    )

    const headerElements = await screen.findAllByRole('heading', { level: 3 })
    expect(headerElements).toHaveLength(2)
  })

  it('renders 3 link elements if user is admin', async () => {
    const isAdmin = true

    render(
      <Router>
        <Dashboard isAdmin={isAdmin} />
      </Router>
    )

    const linkElements = await screen.findAllByRole('link')
    expect(linkElements).toHaveLength(3)
  })
})
