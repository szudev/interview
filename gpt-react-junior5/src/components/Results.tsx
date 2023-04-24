import useUsers from "../hooks/useUsers";

export default function Results() {
  const { users, isFetching } = useUsers();
  return (
    <p className="text-xl">
      Total de usuarios: {isFetching ? "Calculando..." : users.length}
    </p>
  );
}
