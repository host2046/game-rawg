import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../../hooks/useGame";
import usePlatform from "../../hooks/usePlatform";
import usePlat from "../../hooks/usePlat";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectPlatformId }: Props) => {
  const { data } = usePlatform();
  const selectPlatform = usePlat(selectPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
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
