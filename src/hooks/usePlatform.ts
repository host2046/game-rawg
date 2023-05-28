import paltforms from "../data/paltform";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FecthData } from "../services/api-client";
import { Platform } from "./useGame";

// export interface Platforms {
//   id: number;
//   name: string;
//   slug: string;
// }

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FecthData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: paltforms.length, results: paltforms },
  });

export default usePlatform;
