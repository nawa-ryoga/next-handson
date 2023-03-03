import { css } from "@emotion/react";
import { Movie, MovieId, MovieRevenue } from "../types/movie";
import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"
import movieIdRevenueMaps from 'consts/movie-Id-revenue-map'
import {
  Box,
  Heading,
  OrderedList,
  ListItem,
  VStack,
  Text
} from '@chakra-ui/react'
import MovieCard from '../components/movie-ranking/movie'

export const getStaticProps: GetStaticProps<{ movies: Movie[] }> = async () =>  {
  const movies: Movie[] = await fetch(`http://localhost:3000/api/movies?page=1`).then(res => res.json())

  return {
    props: { movies },
    revalidate: 60
  }
}

const rankingJapanBoxoffice2022: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ movies }) => {

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
                  revenue={movieIdRevenueMaps[0].get(movie.id)!}
                />
              </ListItem>
            )
          }
        </VStack>
      </OrderedList>
    </Box>
  )
}

export default rankingJapanBoxoffice2022