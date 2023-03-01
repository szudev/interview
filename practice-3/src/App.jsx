import SearchForm from "./components/SearchForm";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";

function App() {
  const { loading } = useMovies();

  return (
    <div className="flex flex-col bg-black min-h-screen">
      <header className="flex flex-col gap-4 p-4 justify-center items-center">
        <SearchForm />
      </header>
      <main className="flex justify-center items-center gap-4 p-4 w-full">
        {loading ? <p className="text-white">Loading...</p> : <Movies />}
      </main>
    </div>
  );
}

export default App;
