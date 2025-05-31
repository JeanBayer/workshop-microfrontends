import { useDetail } from "@hooks/useDetail";
import { useMovieId } from "@hooks/useMovieId";
import "./styles.css";

export function Main() {
  const movieId = useMovieId();

  const { data, isLoading, isError } = useDetail(movieId ?? "");

  if (!movieId) {
    return <section>Waiting for movie ID...</section>;
  }

  if (isLoading) {
    return <section className="loading">Loading...</section>;
  }

  if (isError) {
    return <section className="error">Error loading movie details</section>;
  }

  if (!data) {
    return <section className="no-data">No movie data available</section>;
  }

  return (
    <section className="movie-detail">
      <div className="movie-header">
        <img src={data.poster} alt={data.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{data.title}</h1>
          <div className="movie-meta">
            <span className="year">{data.year}</span>
            <span className="duration">
              {Math.floor(data.duration / 60)}h {data.duration % 60}min
            </span>
            <span className="rating">★ {data.rating.toFixed(1)}</span>
          </div>
          <div className="genres">
            {data.genres.map((genre, index) => (
              <span key={index} className="genre-tag">
                {genre}
              </span>
            ))}
          </div>
          <p className="description">{data.description}</p>
          <div className="actors">
            <h2>Cast</h2>
            <div className="actors-list">
              {data.actors.map((actor, index) => (
                <span key={index} className="actor">
                  {actor}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
