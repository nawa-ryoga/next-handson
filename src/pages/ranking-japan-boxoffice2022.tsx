import { css } from "@emotion/react";
import useSWRInfinite from "swr/infinite";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import {
  Box,
  Heading,
  OrderedList,
  ListItem,
  VStack,
  Text,
  Button,
  Flex
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

import type { Movie } from "types/movie";
import movieIdRevenueMaps from 'consts/movie-Id-revenue-map'
import MovieCard from 'components/movie-ranking/movie'

export const getStaticProps: GetStaticProps<{ movies: Movie[] }> = async () =>  {
  const movies: Movie[] = await fetch(`http://localhost:3000/api/movies?page=1`).then(res => res.json())

  return {
    props: { movies },
    revalidate: 60
  }
}

const flatMovieIdRevenueMap = new Map([
  ...Array.from(movieIdRevenueMaps[0]), 
  ...Array.from(movieIdRevenueMaps[1]), 
  ...Array.from(movieIdRevenueMaps[2])
])

const rankingJapanBoxoffice2022: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ movies }) => {
  const getKey = (pageIndex: number) => {
    if (pageIndex === 3) return null
    return `http://localhost:3000/api/movies?page=${pageIndex + 1}`
  }

  const {data: moreMoviesInRanking, size, setSize} = useSWRInfinite(
    getKey,
    (url): Promise<Movie[]> => fetch(url).then((r) => r.json()),
    {
      initialSize: 1,
      revalidateFirstPage: false,
      fallback: movies
    }
  )

  const getMovies = () => {
    if (getKey(size)) setSize(size + 1)
  }

  return (
    <Box 
      p={{ base: 4, md: 8 }}
    >
      <VStack spacing={2}>
        <Heading
          textAlign="center"
          fontSize="1.3rem"
          display={{ base: "block", md: "none" }}
        >
          2022年映画興行収入ランキング<br/>日本おすすめ
        </Heading>
        <Heading
          textAlign="center"
          fontSize="1.6rem"
          display={{ base: "none", md: "block" }}
        >
          2022年映画興行収入ランキング 日本おすすめ
        </Heading>
        <Text
          textAlign="center"
          fontSize={{ base: "0.8rem", md: "1.2rem" }}
        >
        （上半期 / 下半期 / 洋画 / 邦画 / アニメ）
        </Text>
      </VStack>

      <Box
        py="6"
      >
      </Box>
      <OrderedList
        marginInlineStart={0}
        css={css`
          counter-reset: item;
          list-style-type: none;
        `}
      >

        <VStack spacing={{ base: 12, md: 6 }}>
          {
            moreMoviesInRanking ?
              moreMoviesInRanking.map((movies, i) => 
                movies.map((movie, i) => 
                <ListItem 
                  key={i}
                  css={css`
                    li:before {
                    counter-increment: item;
                    content: counter(item)'.';
                  `}
                >
                  <MovieCard 
                    movie={movie}
                    revenue={flatMovieIdRevenueMap.get(movie.id)!}
                  />
                </ListItem>
              )):
              <></>
          }
        </VStack>
      </OrderedList>

      <Flex
        justify="center"
        p={4}
      >
        <Button 
          onClick={getMovies}
          display={getKey(size) ? "inline-flex": "none"}
        >
          {'さらに読み込む'}
        </Button>

        <CheckIcon 
          display={getKey(size) ? "none": "inline-flex"}
          color="white" 
          opacity={0.5} 
        />
      </Flex>
    </Box>
  )
}

export default rankingJapanBoxoffice2022