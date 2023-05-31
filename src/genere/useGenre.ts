import { useQuery } from "@tanstack/react-query";
import genres from "./genres";

import ms from "ms";
import ApiClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new ApiClient<Genre>("/genres");

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("1d"),
    initialData: genres,
  });
export default useGenre;
