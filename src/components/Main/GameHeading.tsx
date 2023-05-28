import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenre from "../../hooks/useGenre";
import usePlatform from "../../hooks/usePlatform";
import usePlat from "../../hooks/usePlat";
import useGenres from "../../hooks/useGenres";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenres(gameQuery.genreId);
  const platform = usePlat(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={8} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
