import { useInfiniteQuery } from "@tanstack/react-query";
import fetchUsers from "../services/users";
import { type User } from "../types";

export default function useUsers() {
  const {
    isLoading,
    isFetching,
    data,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<{ users: User[]; nextCursor?: number }>(
    ["users"],
    fetchUsers,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      refetchOnWindowFocus: false,
    }
  );

  return {
    isLoading,
    users: data?.pages?.flatMap((page) => page.users) ?? [],
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };
}
