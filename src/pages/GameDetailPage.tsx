import {
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import DefinitionItem from "../components/DefinitionItem";
import ExpendableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
import CriticScore from "../components/Main/CriticScore";

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
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
