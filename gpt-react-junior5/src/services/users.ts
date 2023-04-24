export default async function fetchUsers({
  pageParam = 1,
}: {
  pageParam?: number;
}) {
  return await fetch(
    `https://randomuser.me/api/?results=5&seed=tech&page=${pageParam}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return await res.json();
    })
    .then((res) => {
      const currentPage = Number(res.info.page);
      const nextCursorValue = currentPage > 3 ? undefined : currentPage + 1;

      return {
        users: res.results,
        nextCursor: nextCursorValue,
      };
    });
}
