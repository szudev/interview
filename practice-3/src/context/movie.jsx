import { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [orderBy, setOrderBy] = useState("name");

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        loading,
        setLoading,
        searchError,
        setSearchError,
        orderBy,
        setOrderBy,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
