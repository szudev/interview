import { useEffect, useMemo, useRef, useState } from "react";
import { type User, SortBy } from "./types.d";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [displayRowsColors, setDisplayRowsColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);
  const originalUsers = useRef<User[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(async (res) => await res.json())
      .then((data) => {
        setUsers(data.results);
        originalUsers.current = data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleColors = () => {
    setDisplayRowsColors((prevState) => !prevState);
  };

  const handleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  const handleDelete = (userUUid: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== userUUid);
    setUsers(filteredUsers);
  };

  const handleResetUserState = () => {
    setUsers(originalUsers.current);
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
    console.log("calculate sortedusers");
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
    <main className="bg-black min-h-screen text-white text-center gap-8 p-4 items-center flex flex-col">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl">Ejercicio Técnico</h1>
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
      <UsersList
        users={sortedUsers}
        showColors={displayRowsColors}
        deleteUser={handleDelete}
        changeSorting={handleChangeSort}
      />
    </main>
  );
}

export default App;
