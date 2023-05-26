import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/Main/GameGrid";
import GenreList from "./components/SidePanel/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/Main/PlatformSelector";
import { Platforms } from "./hooks/usePlatform";
import SortOrderSelecter from "./components/Main/SortOrderSelecter";
import GameHeading from "./components/Main/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
  sortOrder: string;
  searchText: string;
}
const App = () => {
  const [gameQuery, setGamequery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGamequery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGamequery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGamequery({ ...gameQuery, platform })
                }
              />
            </Box>
            <SortOrderSelecter
              selectOrder={gameQuery.sortOrder}
              onSortOrder={(sortOrder) =>
                setGamequery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
