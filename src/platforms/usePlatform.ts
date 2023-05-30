import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import paltforms from "./paltform";

import ApiClient from "../services/api-client";
import { Platform } from "../games/useGame";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: paltforms,
  });

export default usePlatform;
