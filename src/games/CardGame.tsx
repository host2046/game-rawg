import { Game } from "./useGame";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import IconList from "../components/Main/IconList";
import CriticScore from "../components/Main/CriticScore";
import Emoji from "../components/Main/Emoji";
import { Link } from "react-router-dom";

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
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default CardGame;
