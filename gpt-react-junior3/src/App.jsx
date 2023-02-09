import WithResults from "./api/search.response.json";
import WithoutResults from "./api/no-result.response.json";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies, hasMovies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = new window.FormData(event.target);
    const inputData = fields.get("searchedMovie");
    console.log(inputData);
  };

  return (
    <div className="flex flex-col bg-black min-h-screen">
      <header className="flex flex-col p-4 justify-center items-center gap-4">
        <p className="text-white text-4xl">Movie Searcher</p>
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <input
            name="searchedMovie"
            placeholder="Movie name..."
            className="p-2"
          />
          <button type="submit" className="bg-white text-black p-2 rounded">
            Search
          </button>
        </form>
      </header>
      <main className="flex justify-center items-center p-4 text-white">
        <Movies hasMovies={hasMovies} movies={movies} />
      </main>
    </div>
  );
}

export default App;
