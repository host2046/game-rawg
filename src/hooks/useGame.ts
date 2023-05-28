import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";

import ApiClient, { FecthData } from "../services/api-client";

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

const useGame = (gameQuery: GameQuery) =>
  useQuery<FecthData<Game>, Error>({
    queryKey: ["game", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGame;
