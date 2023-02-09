function MoviesResult({ movies }) {
  return (
    <ul className="flex flex-wrap gap-6 justify-center items-center">
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="text-white gap-2 flex flex-col justify-center items-center text-center"
        >
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} className="" />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResult() {
  return (
    <p className="text-white">
      There aren't any movies that match the searched text.
    </p>
  );
}

export default function Movies({ hasMovies, movies }) {
  return hasMovies === "True" ? (
    <MoviesResult movies={movies} />
  ) : (
    <NoMoviesResult />
  );
}
