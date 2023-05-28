import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FecthData } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FecthData<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
export default useGenre;
