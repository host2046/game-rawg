import {
  List,
  ListItem,
  HStack,
  Image,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../../hooks/useGenre";
import useGameQueryStore from "../../store/store";

const GenreList = () => {
  const { error, data, isLoading } = useGenre();
  const selectGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);
  if (error) return null;
  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY={2} key={genre.id}>
            <HStack>
              <Image
                objectFit="cover"
                src={genre.image_background}
                boxSize={8}
                borderRadius={10}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
