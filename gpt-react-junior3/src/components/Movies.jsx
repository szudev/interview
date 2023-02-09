function MoviesResult({ movies }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full gap-6 justify-center items-center">
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="text-white gap-2 flex flex-col justify-center items-center text-center"
        >
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} className="rounded" />
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

export default function Movies({ movies }) {
  return movies !== undefined ? (
    <MoviesResult movies={movies} />
  ) : (
    <NoMoviesResult />
  );
}
