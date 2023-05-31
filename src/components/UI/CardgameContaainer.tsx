import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const CardgameContaainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.1)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default CardgameContaainer;
