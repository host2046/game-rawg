import { useInfiniteQuery } from "@tanstack/react-query";

import ApiClient, { FecthData } from "../services/api-client";
import ms from "ms";
import useGameQueryStore, { GameQuery } from "../store/store";

const apiClient = new ApiClient<Game>("/games");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGame = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FecthData<Game>, Error>({
    queryKey: ["game", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("1d"),
  });
};

export default useGame;
