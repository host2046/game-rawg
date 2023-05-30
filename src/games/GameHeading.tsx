import { Heading } from "@chakra-ui/react";

import useGenres from "../genere/useGenres";
import usePlat from "../platforms/usePlat";
import useGameQueryStore from "../store/store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenres(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlat(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={8} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
