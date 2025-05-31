import { Movie } from "@type/category";
import { navigateToUrl } from "single-spa";
import styles from "./movie-card.module.css";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  const handleNavigation = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToUrl(url);
  };

  return (
    <a
      href={`/movies/${movie.id}`}
      className={styles.movieCard}
      onClick={handleNavigation(`/movies/${movie.id}`)}
    >
      <img
        src={movie.thumbnail || "/placeholder.svg"}
        alt={movie.title}
        width={350}
        height={200}
        className={styles.movieImage}
      />
      <div className={styles.vignete} />

      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <div className={styles.movieDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Rating:</span>
            <span className={styles.movieRating}>★ {movie.rating}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Year:</span>
            <span>{movie.year}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Duration:</span>
            <span>{movie.duration} min</span>
          </div>
        </div>
      </div>
    </a>
  );
};
