import { Carousel } from "@components/carousel/carousel";
import { MovieCard } from "@components/movie/movie-card";
import type { Movie } from "@type/category";
import styles from "./category-row.module.css";

type MovieRowProps = {
  title: string;
  movies: Movie[];
};

export const CategoryRow = ({ title, movies }: MovieRowProps) => {
  return (
    <div className={styles.movieRow}>
      <h2 className={styles.rowTitle}>{title}</h2>
      <Carousel>
        {movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Carousel>
    </div>
  );
};
