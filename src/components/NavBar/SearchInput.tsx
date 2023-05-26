import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";

import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
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
