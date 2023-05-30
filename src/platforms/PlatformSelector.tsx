import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store/store";
import usePlat from "./usePlat";
import usePlatform from "./usePlatform";

const PlatformSelector = () => {
  const { data } = usePlatform();
  const selectPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectPlatform = usePlat(selectPlatformId);
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
