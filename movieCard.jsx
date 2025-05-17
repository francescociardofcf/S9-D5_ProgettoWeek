const MovieCard = ({movie}) => (
  <div className="movie-card">
    <img src={movie.Poster} alt={movie.Title} />
    <h4>
      {movie.Title} ({movie.Year})
    </h4>
  </div>
);

export default MovieCard;
