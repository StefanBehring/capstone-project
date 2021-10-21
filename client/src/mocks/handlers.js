import { rest } from 'msw'

export const handlers = [
  rest.get('/api/movies/top', (req, res, ctx) => {
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
  rest.get('/api/movies/all', (req, res, ctx) => {
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
      })
    )
  }),
]
