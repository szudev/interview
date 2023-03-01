import { useCallback, useContext, useMemo, useRef } from "react";
import searchMovies from "../services/movies";
import debounce from "just-debounce-it";
import { MovieContext } from "../context/movie";
import { SearchContext } from "../context/search";

export default function useMovies() {
  const { search } = useContext(SearchContext);
  const {
    movies,
    setMovies,
    loading,
    setLoading,
    searchError,
    setSearchError,
    orderBy,
    setOrderBy,
  } = useContext(MovieContext);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    try {
      setSearchError(null);
      setLoading(true);
      previousSearch.current = search;
      const searchedMovies = await searchMovies({ search });
      setMovies(searchedMovies);
    } catch (error) {
      setSearchError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 3000),
    [getMovies]
  );

  const sortedMovies = useMemo(() => {
    return orderBy === "name"
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : [...movies].sort((a, b) => a.type.localeCompare(b.type));
  }, [orderBy, movies]);

  return {
    debouncedGetMovies,
    getMovies,
    movies: sortedMovies,
    loading,
    searchError,
    setOrderBy,
  };
}
