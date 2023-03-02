import { Movie, MovieRevenue } from "../../types/movie"

import { 
  Box, 
  Heading, 
  Text,
  Image,
  Flex, 
} from '@chakra-ui/react'

interface Props {
  movie: Movie,
  revenue: MovieRevenue
}

const backgroundStyle = (backdrop_path?: string): string => {
  const overlay = `linear-gradient(rgba(3, 8, 28, 0.8), rgba(3, 8, 28, 0.8)),`
  return (backdrop_path) ? 
    `${overlay} url(${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}/${backdrop_path}) center / cover;`:
    overlay
}

const MovieCard = ({ movie, revenue }: Props) => {
  return (
    <Box
      px="3"
      py="6"
      maxW="60%"
      mx="auto"
    >
      <Flex
        w="100%"
        h="auto"
        p="4"
        borderRadius="4"
        bg={backgroundStyle(movie.backdrop_path)}
      >
        <Box
          pr="4"
        >
          <Heading
            as="h3"
            size="md"
            fontSize="1.5rem"
          >
            {movie.title}
          </Heading>
          <Heading
            as="h4"
            size="sm"
            fontSize="1.1rem"
            py="1"
          >
            {`
              興行収入：${revenue}億円
            `}
          </Heading>
          <Text
            fontSize="14px"
            lineHeight="1.5"
            opacity="0.8"
            mt="4"
          >
            {movie.overview}
          </Text>
        </Box>
        <Flex
          maxW="150px"
          align="center"
        >
          <Image 
            src={`${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}/${movie.poster_path}`} 
            alt={`${movie.title}のポスター`} 
            maxW="100%"
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default MovieCard