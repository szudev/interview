const API_KEY = "1ba0f63e";

export default async function searchMovies({ search, orderBy }) {
  if (search === "") return null;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();
    const movies = json.Search;
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error on search movies.");
  }
}
