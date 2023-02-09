import WithResults from "../api/search.response.json";

export function useMovies() {
  const movies = WithResults.Search;
  const hasMovies = WithResults.Response;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies, hasMovies };
}
