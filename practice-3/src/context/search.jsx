import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        error,
        setError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
