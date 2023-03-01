import { Movie, MovieRevenue } from "../../types/movie"

import { 
  Box, 
  Heading, 
  Text,
  Image,
  Flex, 
  Card,
  CardHeader,
  CardBody
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
    <Card
      maxW="60%"
      mx="auto"
      bg={backgroundStyle(movie.backdrop_path)}
    >
      <Flex
        w="100%"
        h="auto"
        borderRadius="4"
      >
        <Box
          pr="4"
        >
          <CardHeader>
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
          </CardHeader>
          <CardBody
            pt={0}
          >
            <Text
              fontSize="14px"
              lineHeight="1.5"
              opacity="0.8"
            >
              {movie.overview}
            </Text>
          </CardBody>
        </Box>
        <Flex
          maxW="150px"
          align="center"
        >
          <CardBody 
            py={0}
            pl={0}
          >
            <Image 
              src={`${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}/${movie.poster_path}`} 
              alt={`${movie.title}のポスター`} 
              maxW="100%"
            />
          </CardBody>
        </Flex>
      </Flex>
    </Card>
  )
}

export default MovieCard