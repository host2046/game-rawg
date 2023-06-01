import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpendableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenShot from "../components/GameScreenShot";
import GameTrailer from "../components/GameTrailer";

import useGame from "../hooks/use-games";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpendableText>{game.description_raw}</ExpendableText>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameTrailer gameId={game.id} />
        <GameScreenShot gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
