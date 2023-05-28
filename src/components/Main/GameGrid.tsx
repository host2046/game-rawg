import { Fragment } from "react";
import useGame from "../../hooks/useGame";
import { Text, SimpleGrid, Box, Button } from "@chakra-ui/react";
import CardGame from "./CardGame";
import CardgameContaainer from "../UI/CardgameContaainer";
import LoadingSkeketon from "./LoadingSkeketon";

import { GameQuery } from "../../App";
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    error,
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skelets = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skelets.map((skelet) => (
            <CardgameContaainer key={skelet}>
              <LoadingSkeketon />
            </CardgameContaainer>
          ))}
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <CardgameContaainer key={game.id}>
                {" "}
                <CardGame game={game} />
              </CardgameContaainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "loading..." : "load more"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
