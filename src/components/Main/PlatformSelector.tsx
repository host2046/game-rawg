import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../../hooks/useGame";
import usePlatform from "../../hooks/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectPlatformId }: Props) => {
  const { data } = usePlatform();
  const selectedPlatform = data?.results.find((p) => p.id === selectPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
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
