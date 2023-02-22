import { css } from "@emotion/react";
import { NextPage } from "next"

interface MovieData {
  title: string
}

const movies: MovieData[] = [
  { title: '作品1' },
  { title: '作品2' },
  { title: '作品3' },
  { title: '作品4' },
  { title: '作品5' },
  { title: '作品6' },
  { title: '作品7' },
  { title: '作品8' },
]

const rankingJapanBoxoffice2022: NextPage = () => {
  return (
    <div 
      css={css`
        padding: 32px;
      `}
    >
      <ol>
        {
          movies.map((movie, i) => <li key={i}>{movie.title}</li>)
        }
      </ol>
    </div>
  )
}

export default rankingJapanBoxoffice2022