import Genre from "./Genre";
import Platform from "./Platform";
import { Publishers } from "./publishers";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  publishers: Publishers[];
}
