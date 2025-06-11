export type Category = {
  id: string;
  name: string;
  movies: Movie[];
};

export type Movie = {
  id: string;
  title: string;
  description: string;
  rating: number;
  year: number;
  genres: string[];
  thumbnail: string;
  poster: string;
  actors: string[];
  duration: number;
};
