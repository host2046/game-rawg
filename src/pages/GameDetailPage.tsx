import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpendableText from "../components/ExpendableText";
import useGame from "../hooks/use-games";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
    </>
  );
};

export default GameDetailPage;
