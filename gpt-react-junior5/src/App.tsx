import { useMemo, useState } from "react";
import { type User, SortBy } from "./types.d";
import UsersList from "./components/UsersList";
import useUsers from "./hooks/useUsers";
import Results from "./components/Results";

function App() {
  const {
    isLoading: loading,
    users,
    isError: error,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useUsers();

  const [displayRowsColors, setDisplayRowsColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  const toggleColors = () => {
    setDisplayRowsColors((prevState) => !prevState);
  };

  const handleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  const handleDelete = (userUUid: string) => {
    // const filteredUsers = users.filter((user) => user.login.uuid !== userUUid);
    // setUsers(filteredUsers);
  };

  const handleResetUserState = () => {
    void refetch();
  };

  const handleChangeSort = (sort: SortBy) => {
    setSorting(sort);
  };

  const filteredUsers = useMemo(() => {
    console.log("calculate filtereduser");
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) =>
          user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        )
      : users;
  }, [users, filterCountry]);

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers;

    const compareProperty: Record<string, (user: User) => string> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last,
    };

    return [...filteredUsers].sort((a, b) => {
      const extractProperty = compareProperty[sorting];
      return extractProperty(a).localeCompare(extractProperty(b));
    });
  }, [filteredUsers, sorting]);

  return (
    <div className="bg-black min-h-screen text-white text-center gap-8 p-4 items-center flex flex-col">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl">Ejercicio Técnico</h1>
        <Results />
        <div className="flex gap-2">
          <button className="rounded bg-slate-600 p-2" onClick={toggleColors}>
            Colorear Filas
          </button>
          <button
            className="rounded bg-slate-600 p-2"
            onClick={handleSortByCountry}
          >
            {sorting === SortBy.COUNTRY
              ? "No ordenar por paìs"
              : "Ordenar por Paìs"}
          </button>
          <button
            className="rounded bg-slate-600 p-2"
            onClick={handleResetUserState}
          >
            Resetear estado
          </button>
          <input
            className="p-2 rounded text-black focus:outline-violet-800"
            placeholder="Filtrar por paìs"
            onChange={(e) => {
              setFilterCountry(e.target.value);
            }}
          />
        </div>
      </header>
      <main className="w-full">
        {users.length > 0 && (
          <UsersList
            users={sortedUsers}
            showColors={displayRowsColors}
            deleteUser={handleDelete}
            changeSorting={handleChangeSort}
          />
        )}
        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-white">Ha ocurrido un error.</p>}
        {!loading && !error && users.length === 0 && (
          <p className="text-white">No hay usuarios</p>
        )}
        {!loading && !error && hasNextPage === true && (
          <button
            className="rounded bg-slate-800 p-2"
            onClick={() => {
              void fetchNextPage();
            }}
          >
            Cargar mas resultados
          </button>
        )}
        {!loading && !error && hasNextPage === false && (
          <p className="text-white">No hay mas resultados.</p>
        )}
      </main>
    </div>
  );
}

export default App;
