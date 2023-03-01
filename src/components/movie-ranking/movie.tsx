import { Movie, MovieRevenue } from "../../types/movie"

import { 
  Box, 
  Heading, 
  Text,
  Image,
  Flex, 
  FlexProps,
  Card,
  CardHeader,
  CardBody,
  HStack
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

type MoviePoster = Pick<Movie, "poster_path" | "title">

const MoviePoster = ({poster_path, title, display, mx, mt}: MoviePoster & FlexProps) => {
  return (
    <Flex
      maxW="150px"
      minW="150px"
      align="center"
      display={display}
      mx={mx}
      mt={mt}
    >
      <CardBody 
        p={0}
      >
        <Image 
          src={`${process.env.NEXT_PUBLIC_TMDB_IMG_PATH}/${poster_path}`} 
          alt={`${title}のポスター`} 
          maxW="100%"
        />
      </CardBody>
    </Flex>
  )
}

const MovieCard = ({ movie, revenue }: Props) => {
  return (
    <Card
      maxW={{ base: "100%", md: "70%" }}
      mx="auto"
      bg={backgroundStyle(movie.backdrop_path)}
    >
      <Flex
        w="100%"
        h="auto"
        borderRadius="4"
      >
        <Box>
          <CardHeader>
            <Heading
              as="h3"
              size="md"
              fontSize={{ base: "1.3rem", md: "1.5rem" }}
              textAlign={{ base: "center", md: "left" }}
            >
              {movie.title}
            </Heading>

            <HStack
              justify={{ base: "center", md: "left" }}
            >
              <Text 
                fontSize="0.7rem"
                pt={0.5}
              >
                興行収入：
              </Text>
              <Heading
                as="h4"
                size="sm"
                fontSize="1.1rem"
                py="1"
              >
                {`${revenue}億円`}
              </Heading>
            </HStack>

            <MoviePoster 
              display={{ base: "flex", md: "none" }}
              mx="auto"
              mt={3}
              title={movie.title}
              poster_path={movie.poster_path}
            />

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

        <CardBody
          display={{ base: "none", md: "block" }}
        >
          <MoviePoster 
            display={{ base: "none", md: "flex" }}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        </CardBody>

      </Flex>
    </Card>
  )
}

export default MovieCard