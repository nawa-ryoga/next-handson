export type Movie = {
  id: number,
  title: string,
  backdrop_path?: string,
  poster_path?: string,
  revenue: number,
  release_date: string,
  overview?: string,
}

export type MovieId = number

export type MovieRevenue = number