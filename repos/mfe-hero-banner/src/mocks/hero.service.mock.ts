const MOVIE_TITANIC = {
  id: "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6",
  title: "Titanic",
  description:
    "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  rating: 7.9,
  year: 1997,
  genres: ["Drama", "Romance"],
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  poster:
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/01/titanic-2577593.jpg?tf=3840x",
  actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
  duration: 194,
} as const;

const MOVIE_ERROR = {
  error: "Error fetching hero data",
} as const;

const NULL_MOVIE = null;

const GET_HERO_RESPONSES = {
  OK: MOVIE_TITANIC,
  ERROR: MOVIE_ERROR,
  NULL: NULL_MOVIE,
} as const;

export const HERO_SERVICE_MOCK = {
  GET_HERO: GET_HERO_RESPONSES,
} as const;
