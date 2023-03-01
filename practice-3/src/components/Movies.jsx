import useMovies from "../hooks/useMovies";

function WithMovies({ movies }) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full gap-4">
      {movies.map((movie) => (
        <li
          key={movie.id}
          className="flex flex-col gap-2 text-white justify-center items-center text-center"
        >
          <p>{movie.title}</p>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} className="rounded" />
        </li>
      ))}
    </ul>
  );
}

function WithoutMovies() {
  return <p>There aren't any movie no show</p>;
}

export default function Movies() {
  const { movies } = useMovies();
  const hasMovies = movies?.length > 0;
  return hasMovies ? <WithMovies movies={movies} /> : <WithoutMovies />;
}
