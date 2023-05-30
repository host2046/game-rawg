import { Fragment } from "react";
import useGame from "./useGame";
import { Text, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardGame from "./CardGame";
import CardgameContaainer from "../components/UI/CardgameContaainer";
import LoadingSkeketon from "../components/Main/LoadingSkeketon";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { error, data, isLoading, fetchNextPage, hasNextPage } = useGame();
  const skelets = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  const fetchDataCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      hasMore={!!hasNextPage}
      dataLength={fetchDataCount}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
