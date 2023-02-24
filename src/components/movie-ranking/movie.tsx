import { css } from "@emotion/react";
import Movie from "../../types/movie";

import {useClient} from "../../hooks/useClient";

interface Props {
  movie: Movie;
}

const backgroundStyle = (backdrop_path?: string): string => {
  const overlay = `linear-gradient(rgba(3, 8, 28, 0.8), rgba(3, 8, 28, 0.8)),`
  return (backdrop_path) ? 
    `background: ${overlay} url(${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}/${backdrop_path}) center / cover;`:
    overlay
}

const MovieCard = ({ movie }: Props) => {
  const isClient = useClient()

  return (
    <>
      {
        isClient ? 
          <div
            css={css`
              padding: 12px 24px;
              max-width: 60%;
              margin: 0 auto;
            `}
          >
            <div
              css={css`
                width: 100%;
                height: auto;
                padding: 16px;
                border-radius: 4px;
                display: flex;
                ${backgroundStyle(movie.backdrop_path)};
              `}
            >
              <div
                css={css`
                  flex: 1;
                  padding-right: 16px;
                `}
              >
                <h3
                  css={css`
                    font-size: 1.5rem;
                  `}
                >
                  {movie.title}
                </h3>
                <h4
                  css={css`
                    font-size: 1.1rem;
                    padding: 4px 0;
                  `}
                  >
                    {`
                      興行収入：${movie.revenue? 
                      movie.revenue.toLocaleString('ja-JP', {style:'currency', currency: 'JPY'}):
                      `情報なし`}
                    `}
                  </h4>
                <p
                  css={css`
                    font-size: 14px;
                    line-height: 1.5;
                    opacity: 0.8;
                  `}
                >
                  {movie.overview}
                </p>
              </div>
              <div
                css={css`
                  max-width: 150px;
                  display:flex;
                  align-items: center;
                `}
              >
                <img 
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}/${movie.poster_path}`} 
                  alt={`${movie.title}のポスター`} 
                  css={css`
                    max-width: 100%;
                  `}
                />
              </div>
            </div>
          </div>:
          <></>
      }
    </>
  )
}

export default MovieCard