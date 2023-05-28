import { useQuery } from "@tanstack/react-query";
import paltforms from "../data/paltform";

import ApiClient from "../services/api-client";
import { Platform } from "./useGame";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: paltforms,
  });

export default usePlatform;
