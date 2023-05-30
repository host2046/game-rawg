import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";

import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store/store";

const SearchInput = () => {
  const onSearch = useGameQueryStore((state) => state.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const submitHander = (event: FormEvent) => {
    event.preventDefault();
    const enteredGame = ref.current!.value;
    onSearch(enteredGame);
  };
  return (
    <form onSubmit={submitHander}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search game..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
