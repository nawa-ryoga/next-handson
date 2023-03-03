import { MovieId, MovieRevenue } from "types/movie";

const movieIdRevenueMaps: ReadonlyMap<MovieId, MovieRevenue>[] = [
  new Map([
    [900667, 197],
    [810693, 137.5],
    [916224, 137.4],
    [361743, 135.7],
    [783675, 107.7],
    [903939, 97.8],
    [507086, 63.2],
    [961420, 51.6],
    [338953, 46.0],
    [634429, 44.4],
  ]),
  new Map([
    [76600, 42.6],
    [634649, 44.4],
    [438695, 33.1],
    [923526, 30.1],
    [876797, 30.0],
    [956564, 30.0],
    [930432, 28.9],
    [782054, 26.9],
    [610150, 25.1],
    [1030205, 25.0],
  ]),
  new Map([
    [1019421, 23.9],
    [820067, 22.4],
    [990365, 21.9],
    [453395, 21.6],
    [955666, 20.4],
    [994315, 20.0],
    [915295, 20.0],
    [580489, 19.1],
    [977871, 15.3],
    [876792, 15.0],
  ])
]

export default movieIdRevenueMaps