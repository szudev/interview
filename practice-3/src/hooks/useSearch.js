import { useEffect, useRef, useContext } from "react";
import { SearchContext } from "../context/search";

export default function useSearch() {
  const { search, setSearch, error, setError } = useContext(SearchContext);
  const searchInputRef = useRef(true);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current = search === "";
      return;
    }
    if (search === "") {
      setError("Para buscar se requiere el nombre de una pelìcula");
      return;
    }
    if (search.length < 3) {
      setError("El nombre de la pelìcula debe ser de mìnimo 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, error, setSearch };
}
