import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreen";
import CardgameContaainer from "./UI/CardgameContaainer";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid spacing={8} margin="10px" columns={{ base: 1, md: 2 }}>
      {data?.results.map((game) => (
        <CardgameContaainer key={game.id}>
          <Image src={game.image} />
        </CardgameContaainer>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
