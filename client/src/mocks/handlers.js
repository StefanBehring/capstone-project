import { rest } from 'msw'

export const handlers = [
  rest.post('/api/votings', (req, res, ctx) => {
    const newVoting = {
      userId: '6170461087ebc68671e0058e',
      firstMovieId: '61669c86242e85bee2082fe5',
      secondMovieId: '61669b0f5642db42d61f716b',
    }
    return res(ctx.status(201), ctx.json(newVoting))
  }),
  rest.get('/api/movies/?isToplist=true', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: '61669c86242e85bee2082fe5',
          rating: 1488,
          tmdbId: '550',
        },
        {
          _id: '61669b0f5642db42d61f716b',
          rating: 1387,
          tmdbId: '600',
        },
        {
          _id: '6165d5b0a04769af7bdf9ec8',
          rating: 1373,
          tmdbId: '590',
        },
      ])
    )
  }),
  rest.get('/api/movies', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: '61669c86242e85bee2082fe5',
          rating: 1488,
          tmdbId: '550',
        },
        {
          _id: '61669b0f5642db42d61f716b',
          rating: 1387,
          tmdbId: '600',
        },
        {
          _id: '6165d5b0a04769af7bdf9ec8',
          rating: 1373,
          tmdbId: '590',
        },
      ])
    )
  }),
  rest.get('/api/movies/voting/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: '61669b0f5642db42d61f716b',
          rating: 1387,
          tmdbId: '600',
        },
        {
          _id: '61669c86242e85bee2082fe5',
          rating: 1488,
          tmdbId: '550',
        },
      ])
    )
  }),
  rest.get('/api/tmdb/*', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tmdbId: '580',
        title: 'Jaws: The Revenge',
        year: '1987',
        genre: 'Adventure',
        imgUrl:
          'https://image.tmdb.org/t/p/w500/kGiaOztahZV2x7bil7sbk7fb6ob.jpg',
        budget: 23000000,
        revenue: 51881013,
        overview:
          "After another deadly shark attack, Ellen Brody decides she has had enough of New England's Amity Island and moves to the Caribbean to join her son, Michael, and his family. But a great white shark has followed her there, hungry for more lives.",
        runtime: 89,
        voteAverage: 4,
      })
    )
  }),
  rest.get('/api/dashboard', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        moviesCount: 245,
        votingsCount: 10456,
        unwatchedMoviesCount: 34,
      })
    )
  }),
  rest.get('/api/auth', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: '61669b0f5642db42d61f716b',
        username: 'JohnDoe',
        email: 'johndoe@mail.com',
        isAdmin: false,
      })
    )
  }),
]
