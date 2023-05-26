import { Fragment } from "react";
import useGame from "../../hooks/useGame";
import { Text, SimpleGrid } from "@chakra-ui/react";
import CardGame from "./CardGame";
import CardgameContaainer from "../UI/CardgameContaainer";
import LoadingSkeketon from "./LoadingSkeketon";

import { GameQuery } from "../../App";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data, isLoading } = useGame(gameQuery);
  const skelets = [1, 2, 3, 4, 5, 6];
  return (
    <Fragment>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skelets.map((skelet) => (
            <CardgameContaainer key={skelet}>
              <LoadingSkeketon />
            </CardgameContaainer>
          ))}
        {data.map((game) => (
          <CardgameContaainer key={game.id}>
            {" "}
            <CardGame game={game} />
          </CardgameContaainer>
        ))}
      </SimpleGrid>
    </Fragment>
  );
};

export default GameGrid;
