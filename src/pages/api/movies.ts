import type { NextApiRequest, NextApiResponse } from 'next'
import type { Movie, MovieId, MovieRevenue } from "types/movie";
import movieIdRevenueMaps from 'consts/movie-Id-revenue-map'

const movieIdList = (index: number): MovieId[] => {
  return Array.from(movieIdRevenueMaps[index].keys())
}

const getMovieData = (index: number): Promise<Movie>[] => {
  return movieIdList(index).map((id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=ja`
    ).then(res => res.json())
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Movie[]>) => {
  const indexNumber = Number(req.query.page) - 1

  const movies: Movie[] = await Promise.all(
    getMovieData(indexNumber)
  )
  res.status(200).json(movies)
}

export default handler