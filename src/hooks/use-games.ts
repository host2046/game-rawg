import { useQuery } from "@tanstack/react-query";
import { Game } from "../games/useGame";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
export default useGame;
