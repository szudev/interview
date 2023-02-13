import { useCallback, useState } from "react";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading, errorMessage } = useMovies({
    search,
    sort,
  });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 500),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="flex flex-col bg-black min-h-screen">
      <header className="flex flex-col p-4 justify-center items-center gap-4">
        <p className="text-white text-4xl">Movie Searcher</p>
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <input
            name="search"
            placeholder="Movie name..."
            className="p-2"
            onChange={handleChange}
            value={search}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit" className="bg-white text-black p-2 rounded">
            Search
          </button>
        </form>
        {error && <p className="text-red-500 text-center text-lg">{error}</p>}
      </header>
      <main className="flex w-full justify-center items-center p-4 text-white">
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
