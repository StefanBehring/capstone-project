import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:4000/api/movies/top', (req, res, ctx) => {
    return res(
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
        {
          _id: '6166a60b1652fb89412cf888',
          rating: 1369,
          tmdbId: '580',
        },
      ])
    )
  }),
]
