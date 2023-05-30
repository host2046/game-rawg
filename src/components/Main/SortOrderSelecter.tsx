import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../../store/store";

const SortOrderSelecter = () => {
  const selectOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const onSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrderList = [
    { value: "", label: "Relevance" },
    { value: "-aded", label: "Date aded" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Papularity" },
    { value: "-rating", label: "Avarage rating" },
  ];

  const currentOrder = sortOrderList.find(
    (order) => order.value === selectOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order By: {currentOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrderList.map((order) => (
          <MenuItem
            onClick={() => onSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrderSelecter;
