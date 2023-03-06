import type { Movie, MovieId, MovieRevenue } from "types/movie";
import movieIdRevenueMaps from 'consts/movie-Id-revenue-map'

const movieIdList = (index: number): MovieId[] => {
  return Array.from(movieIdRevenueMaps[index].keys())
}

export const getMovieData = (index: number): Promise<Movie>[] => {
  return movieIdList(index).map((id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=ja`
    ).then(res => res.json())
  })
}