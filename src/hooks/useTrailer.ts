import { useQuery } from "@tanstack/react-query";
import { Trialer } from "../entities/Trailer";
import ApiClient from "../services/api-client";

const useTrailer = (gameId: number) => {
  const apiClient = new ApiClient<Trialer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trilers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
