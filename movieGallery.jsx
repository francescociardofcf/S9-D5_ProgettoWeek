import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";

const MovieGallery = ({sagaName}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = "4505e2c8";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${sagaName}`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search.slice(0, 5));
        } else {
          setError(data.Error);
        }
        setLoading(false);
      })
      .catch(err => {
        setError("Errore nella fetch");
        setLoading(false);
      });
  }, [sagaName]);

  if (loading) return <p>Loading {sagaName}...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{sagaName}</h2>
      <div className="gallery">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
