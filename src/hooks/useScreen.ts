import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../entities/ScreenShot";
import ApiClient from "../services/api-client";

const useScreenShot = (gameId: number) => {
  const apiClient = new ApiClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShot;
