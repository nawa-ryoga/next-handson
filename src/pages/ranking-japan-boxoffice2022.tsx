import { css } from "@emotion/react";
import Movie from "../types/movie";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"

import MovieCard from '../components/movie-ranking/movie'

interface MovieIdList {
  id: number
}

const movieIdList: MovieIdList[] = [
  { id: 900667 },
  { id: 810693 },
  { id: 916224 },
  { id: 361743 },
  { id: 783675 },
  { id: 903939 },
  { id: 507086 },
  { id: 961420 },
  { id: 338953 },
  { id: 438148 },
  { id: 634429 },
  { id: 634649 },
]

export const getStaticProps: GetStaticProps<{ movies: Movie[] }> = async () =>  {

  const promiseList = movieIdList.map(({ id }) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=ja`)
  })
  const responseList = await Promise.all(promiseList)
  const movies: Movie[] = await Promise.all(responseList.map(async (res): Promise<Movie> => res.json()))

  return {
    props: { movies }
  }
}

const rankingJapanBoxoffice2022: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ movies }) => {

  return (
    <div 
      css={css`
        padding: 32px;
      `}
    >
      <h2
        css={css`
          text-align: center;
        `}
      >
        2022年映画興行収入ランキング日本おすすめ（上半期/下半期/洋画/邦画/アニメ）
      </h2>

      <div
        css={css`
          padding: 24px 0;
        `}
      >

      </div>
      <ol
        css={css`
          counter-reset: item;
          list-style-type: none;
        `}
      >
        {
          movies.map((movie, i) => 
            <li 
              key={i}
              css={css`
                li:before {
                counter-increment: item;
                content: counter(item)'.';
              `}
            >
              <MovieCard movie={movie} />
            </li>
          )
        }
      </ol>
    </div>
  )
}

export default rankingJapanBoxoffice2022