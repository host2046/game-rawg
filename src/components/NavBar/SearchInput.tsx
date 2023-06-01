import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";

import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../../store/store";

const SearchInput = () => {
  const navigate = useNavigate();
  const onSearch = useGameQueryStore((state) => state.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const submitHander = (event: FormEvent) => {
    event.preventDefault();
    const enteredGame = ref.current!.value;
    onSearch(enteredGame);
    navigate("/");
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
