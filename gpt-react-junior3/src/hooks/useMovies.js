import { useMemo, useRef, useState } from "react";
import searchMovies from "../services/movies";

export default function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusSearch = useRef(search);

  const getMovies = async () => {
    if (search === previusSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previusSearch.current = search;
      const searchedMovies = await searchMovies({ search });
      setMovies(searchedMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, errorMessage: error };
}
