import { type User, SortBy } from "../types.d";

interface Props {
  users: User[];
  showColors: boolean;
  deleteUser: (userUUid: string) => void;
  changeSorting: (sort: SortBy) => void;
}

export default function UsersList({
  users,
  showColors,
  deleteUser,
  changeSorting,
}: Props) {
  return (
    <table className="w-full" cellPadding={8}>
      <thead>
        <tr>
          <th>Foto</th>
          <th
            className="cursor-pointer"
            onClick={() => changeSorting(SortBy.NAME)}
          >
            Nombre
          </th>
          <th
            className="cursor-pointer"
            onClick={() => changeSorting(SortBy.LAST)}
          >
            Apellido
          </th>
          <th
            className="cursor-pointer"
            onClick={() => changeSorting(SortBy.COUNTRY)}
          >
            País
          </th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr
              key={user.login.uuid}
              className={
                showColors ? "even:bg-[#333] odd:bg-[#555]" : "bg-transparent"
              }
            >
              <td className="flex justify-center">
                <img src={user.picture.thumbnail} alt={user.name.title} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button
                  className="rounded bg-slate-800 p-2"
                  onClick={() => deleteUser(user.login.uuid)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
