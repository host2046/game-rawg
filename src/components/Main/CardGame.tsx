import { Game } from "../../hooks/useGame";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import IconList from "./IconList";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const CardGame = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <IconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CardGame;
