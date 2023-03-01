import { useEffect, useState } from "react";
import useMovies from "../hooks/useMovies";
import useSearch from "../hooks/useSearch";

export default function SearchForm() {
  const { search, setSearch, error } = useSearch();
  const { debouncedGetMovies, getMovies, setOrderBy } = useMovies();

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChangeSort = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <>
      <h1 className="text-white text-2xl">Movie Searcher</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <input
            name="search"
            placeholder="Movie..."
            className="rounded p-2"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" className="rounded p-2 text-white border">
            Search
          </button>
        </div>
        <div className="flex flex-col gap-1 items-start justify-center">
          <p className="text-white">Order By</p>
          <select
            id="order"
            className="w-full p-1 rounded"
            onChange={handleChangeSort}
          >
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
        </div>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}
