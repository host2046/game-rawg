import paltforms from "../data/paltform";
import { useQuery } from "@tanstack/react-query";

import { Platform } from "./useGame";
import ApiClient from "../services/api-client";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: paltforms.length, results: paltforms },
  });

export default usePlatform;
