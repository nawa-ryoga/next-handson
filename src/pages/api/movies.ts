import type { NextApiRequest, NextApiResponse } from 'next'
import type { Movie } from "types/movie";

import { getMovieData } from "script/get-movie"

const handler = async (req: NextApiRequest, res: NextApiResponse<Movie[]>) => {
  const indexNumber = Number(req.query.page) - 1

  const movies: Movie[] = await Promise.all(
    getMovieData(indexNumber)
  )
  res.status(200).json(movies)
}

export default handler